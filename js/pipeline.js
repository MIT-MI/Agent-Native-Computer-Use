/* Figure 1: the build loop. Click a step to show what it did in the FreeCAD build. */
(function () {
  "use strict";

  /* ---------------- Figure 1: the pipeline ---------------- */
  var STAGES = {
    1: {
      title: "Analyze",
      when: "12 tool calls, in the first minute",
      run: "It finds the running FreeCAD process, lists its loaded modules with <code>apptool</code>, and finds the CPython C API among the exports of <code>libpython3.11</code>, which puts the API within reach of injected code.",
      quote: { min: "0.4", text: "We have symbols in libpython. Good." }
    },
    2: {
      title: "Test",
      when: "84 tool calls, 10.7 minutes",
      run: "Its first call into the live FreeCAD process through gdb crashes the program. It restarts FreeCAD, moves to Frida, and after a second crash runs every call on the Qt main thread. Then probe scripts test FreeCAD's Python API in the running program, one part at a time.",
      quote: { min: "3.0", text: "App crashed again. Hmm. Calling <code>FreeCAD.newDocument</code> from Frida thread may have crashed FreeCAD. That's why we need main-thread dispatch." }
    },
    3: {
      title: "Build",
      when: "70 tool calls, 5.9 minutes",
      run: "It writes <code>agent.py</code>, a script that is injected into FreeCAD and runs each operation on the Qt main thread, and <code>server.py</code>, which speaks MCP and forwards each call. It changes both after each test. The result has 85 tools.",
      quote: { min: "6.7", text: "Now write server.py and launch.sh. Let's design carefully." }
    },
    4: {
      title: "Check",
      when: "37 tool calls, 19.8 minutes",
      run: "It runs the deployed server 20 times with <code>try</code>, each time through a list of real tool calls. Twice it asks for a review by a fresh agent on the same desktop, and it fixes what the reviews find before it finishes.",
      quote: { min: "26.7", text: "The review is very valuable. It identified many issues." }
    }
  };

  var pipe = document.getElementById("fig-pipe");
  var detail = document.getElementById("stage-detail");
  var current = 1;

  function renderStage() {
    var s = STAGES[current];
    var html = '<div class="sd-head"><span class="sd-num">' + current + '</span><span class="sd-title">' + s.title + '</span><span class="sd-when">' + s.when + '</span></div>';
    html += '<p>' + s.run + '</p>';
    html += '<div class="quote">\u201c' + s.quote.text + '\u201d<cite>The agent, minute ' + s.quote.min + ' of the build</cite></div>';
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
  renderStage();


})();
