/* Figure 1: the build loop. Click a step to show what it did in the FreeCAD build; toggle the memory-only ablation. */
(function () {
  "use strict";

  /* ---------------- Figure 1: the pipeline ---------------- */
  var STAGES = {
    1: {
      title: "Analyze",
      when: "12 tool calls, in the first minute",
      run: "It finds the running FreeCAD process, lists its loaded modules with <code>apptool</code>, and finds the CPython C API among the exports of <code>libpython3.11</code>, which puts the API within reach of injected code.",
      quote: { min: "0.4", text: "We have symbols in libpython. Good." },
      mem: "REA and the target files are withheld, so there is nothing to inspect."
    },
    2: {
      title: "Test",
      when: "84 tool calls, 10.7 minutes",
      run: "Its first call into the live FreeCAD process through gdb crashes the program. It restarts FreeCAD, moves to Frida, and after a second crash runs every call on the Qt main thread. Then probe scripts test FreeCAD's Python API in the running program, one part at a time.",
      quote: { min: "3.0", text: "App crashed again. Hmm. Calling <code>FreeCAD.newDocument</code> from Frida thread may have crashed FreeCAD. That's why we need main-thread dispatch." },
      mem: "FreeCAD cannot run, so nothing the agent believes about it gets tested."
    },
    3: {
      title: "Build",
      when: "70 tool calls, 5.9 minutes",
      run: "It writes <code>agent.py</code>, a script that is injected into FreeCAD and runs each operation on the Qt main thread, and <code>server.py</code>, which speaks MCP and forwards each call. It changes both after each test. The result has 85 tools.",
      quote: { min: "6.7", text: "Now write server.py and launch.sh. Let's design carefully." },
      mem: "The server is written from the model's memory of FreeCAD's API."
    },
    4: {
      title: "Check",
      when: "37 tool calls, 19.8 minutes",
      run: "It runs the deployed server 20 times with <code>try</code>, each time through a list of real tool calls. Twice it asks for a review by a fresh agent on the same desktop, and it fixes what the reviews find before it finishes.",
      quote: { min: "26.7", text: "The review is very valuable. It identified many issues." },
      mem: "It can build the image and list its tools. No call reaches a real FreeCAD."
    }
  };

  var pipe = document.getElementById("fig-pipe");
  var detail = document.getElementById("stage-detail");
  var current = 1;
  var mode = "rea";

  function renderStage() {
    var s = STAGES[current];
    var html = '<div class="sd-head"><span class="sd-num">' + current + '</span><span class="sd-title">' + s.title + '</span><span class="sd-when">' + s.when + '</span></div>';
    if (mode === "rea") {
      html += '<p>' + s.run + '</p>';
      html += '<div class="quote">\u201c' + s.quote.text + '\u201d<cite>DeepSeek V4.1 Flash, minute ' + s.quote.min + ' of the build</cite></div>';
    } else {
      html += '<p class="sd-mem">' + s.mem + '</p>';
    }
    detail.innerHTML = html;
    pipe.querySelectorAll(".stage").forEach(function (g) {
      var on = Number(g.getAttribute("data-stage")) === current;
      g.classList.toggle("is-active", on);
      g.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  pipe.querySelectorAll(".stage").forEach(function (g) {
    function pick() { current = Number(g.getAttribute("data-stage")); renderStage(); }
    g.addEventListener("click", pick);
    g.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); }
    });
  });
  pipe.querySelectorAll(".seg button").forEach(function (b) {
    b.addEventListener("click", function () {
      mode = b.getAttribute("data-mode");
      pipe.classList.toggle("mem", mode === "mem");
      pipe.querySelectorAll(".seg button").forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
      renderStage();
    });
  });
  renderStage();


})();
