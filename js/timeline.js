/* Figure 2: every tool call of the 37-minute build. Clicking a numbered moment shows what the agent wrote then. */
(function () {
  "use strict";

  /* ---------------- Figure 2: the build timeline ---------------- */
  var END = 37.1;
  var SEGS = [[0,0.43,1],[0.43,0.56,2],[0.56,0.61,1],[0.61,1.32,2],[1.32,1.47,1],[1.47,1.92,2],[1.92,1.97,3],[1.97,4.32,2],[4.32,4.37,3],[4.37,5.01,2],[5.01,5.13,3],[5.13,6.46,2],[6.46,7.57,3],[7.57,7.72,4],[7.72,8.45,2],[8.45,8.62,3],[8.62,9.09,4],[9.09,9.16,2],[9.16,9.4,3],[9.4,9.83,4],[9.83,9.92,3],[9.92,10.37,4],[10.37,10.4,3],[10.4,10.46,2],[10.46,10.64,4],[10.64,11.07,2],[11.07,11.24,3],[11.24,11.35,2],[11.35,11.43,3],[11.43,11.53,2],[11.53,11.61,3],[11.61,11.85,2],[11.85,11.89,3],[11.89,12.15,2],[12.15,12.37,3],[12.37,12.74,4],[12.74,12.96,2],[12.96,13.08,3],[13.08,13.45,4],[13.45,13.65,2],[13.65,13.76,3],[13.76,14.13,4],[14.13,14.22,2],[14.22,14.34,3],[14.34,14.59,4],[14.59,14.63,2],[14.63,14.81,3],[14.81,14.88,4],[14.88,14.92,3],[14.92,15.17,4],[15.17,15.33,3],[15.33,15.56,4],[15.56,15.61,3],[15.61,17.05,4],[17.05,17.45,2],[17.45,17.5,3],[17.5,20.0,4],[20.0,20.05,3],[20.05,26.65,4],[26.65,27.39,2],[27.39,27.96,3],[27.96,28.39,4],[28.39,28.55,3],[28.55,29.15,4],[29.15,29.44,2],[29.44,29.67,3],[29.67,29.76,4],[29.76,29.88,3],[29.88,30.08,4],[30.08,30.45,2],[30.45,30.63,3],[30.63,30.93,4],[30.93,31.05,2],[31.05,31.1,3],[31.1,31.64,4],[31.64,31.98,3],[31.98,34.15,4],[34.15,34.33,3],[34.33,34.69,4],[34.69,34.89,3],[34.89,35.11,4],[35.11,35.16,2],[35.16,35.22,3],[35.22,35.26,2],[35.26,35.31,3],[35.31,35.44,2],[35.44,35.48,3],[35.48,35.67,4],[35.67,35.79,3],[35.79,35.89,4],[35.89,36.22,2],[36.22,36.42,3],[36.42,36.67,4],[36.67,36.75,2],[36.75,36.79,3],[36.79,37.02,4]];
  var CALLS = [[0.02,"x"],[0.02,"x"],[0.24,"r"],[0.24,"x"],[0.28,"r"],[0.28,"r"],[0.34,"r"],[0.34,"x"],[0.38,"x"],[0.43,"r"],[0.52,"r"],[0.56,"x"],[0.59,"x"],[0.61,"x"],[0.89,"r"],[1.32,"r"],[1.32,"x"],[1.47,"r"],[1.53,"r"],[1.59,"r"],[1.71,"r"],[1.75,"r"],[1.92,"r"],[1.97,"x"],[2.06,"x"],[2.1,"x"],[2.41,"r"],[2.66,"r"],[2.97,"x"],[3.01,"x"],[3.04,"x"],[4.32,"x"],[4.37,"r"],[4.42,"x"],[4.45,"x"],[4.54,"x"],[4.59,"x"],[5.01,"x"],[5.13,"x"],[5.49,"x"],[5.56,"x"],[5.6,"x"],[5.88,"x"],[6.46,"x"],[6.65,"r"],[7.15,"x"],[7.17,"x"],[7.22,"x"],[7.57,"x"],[7.72,"x"],[7.8,"x"],[7.86,"x"],[8.04,"x"],[8.08,"x"],[8.13,"x"],[8.19,"x"],[8.45,"x"],[8.57,"x"],[8.62,"x"],[8.99,"x"],[9.09,"x"],[9.16,"x"],[9.29,"x"],[9.34,"x"],[9.4,"x"],[9.83,"x"],[9.92,"b"],[10.37,"r"],[10.4,"x"],[10.46,"b"],[10.64,"x"],[10.71,"x"],[10.82,"x"],[10.87,"x"],[10.91,"x"],[11.07,"x"],[11.13,"x"],[11.24,"x"],[11.35,"x"],[11.43,"x"],[11.48,"x"],[11.53,"x"],[11.57,"x"],[11.61,"x"],[11.68,"x"],[11.75,"x"],[11.85,"x"],[11.89,"x"],[11.95,"x"],[12.0,"x"],[12.06,"x"],[12.15,"x"],[12.2,"x"],[12.29,"x"],[12.37,"b"],[12.74,"x"],[12.78,"x"],[12.96,"x"],[13.08,"b"],[13.45,"x"],[13.65,"x"],[13.71,"x"],[13.76,"b"],[14.13,"x"],[14.22,"x"],[14.29,"x"],[14.34,"b"],[14.59,"x"],[14.63,"x"],[14.81,"x"],[14.88,"x"],[14.92,"b"],[15.17,"x"],[15.23,"x"],[15.33,"b"],[15.56,"x"],[15.61,"x"],[17.05,"x"],[17.08,"x"],[17.45,"x"],[17.5,"x"],[20.0,"r"],[20.05,"x"],[20.21,"b"],[26.65,"x"],[26.73,"x"],[26.87,"x"],[26.92,"x"],[27.0,"x"],[27.06,"x"],[27.11,"x"],[27.17,"x"],[27.23,"x"],[27.39,"x"],[27.5,"x"],[27.63,"x"],[27.74,"x"],[27.89,"x"],[27.96,"b"],[28.39,"x"],[28.48,"x"],[28.55,"b"],[28.84,"x"],[28.91,"b"],[29.15,"x"],[29.21,"x"],[29.44,"x"],[29.5,"x"],[29.55,"x"],[29.6,"x"],[29.67,"x"],[29.72,"x"],[29.76,"x"],[29.82,"x"],[29.88,"b"],[30.08,"x"],[30.16,"x"],[30.2,"x"],[30.28,"x"],[30.33,"x"],[30.45,"x"],[30.56,"x"],[30.63,"b"],[30.93,"x"],[31.05,"x"],[31.1,"b"],[31.64,"x"],[31.71,"x"],[31.98,"b"],[32.3,"x"],[32.35,"b"],[34.15,"x"],[34.22,"x"],[34.27,"x"],[34.33,"b"],[34.69,"x"],[34.73,"x"],[34.76,"x"],[34.79,"x"],[34.85,"x"],[34.89,"b"],[35.11,"x"],[35.16,"x"],[35.22,"x"],[35.26,"x"],[35.31,"x"],[35.44,"x"],[35.48,"b"],[35.67,"x"],[35.79,"b"],[35.89,"x"],[35.96,"x"],[36.0,"x"],[36.11,"x"],[36.22,"x"],[36.29,"x"],[36.37,"x"],[36.42,"b"],[36.67,"x"],[36.75,"x"],[36.79,"b"],[36.96,"x"],[37.02,"b"]];
  var MOMENTS = [
    [0.4, 1, "We have symbols in libpython. Good."],
    [0.6, 2, "FreeCAD process gone! Our first gdb call crashed it. Oops. The app is no longer running."],
    [1.3, 2, "Excellent! GIL works. Now we can inject arbitrary Python code into running FreeCAD via gdb."],
    [3.0, 2, "App crashed again. Hmm. Calling <code>FreeCAD.newDocument</code> from Frida thread may have crashed FreeCAD. That's why we need main-thread dispatch."],
    [4.5, 2, "Agent works. Now test creating objects on main thread."],
    [7.7, 4, "MCP works end-to-end."],
    [10.4, 4, "<code>try</code> works. Deployed MCP starts."],
    [14.6, 2, "<code>Mesh.Mesh.cut</code> is a different operation (cuts with a polygon), not boolean subtraction. The boolean subtraction method is <code>difference</code>."],
    [26.7, 4, "The review is very valuable. It identified many issues."],
    [35.4, 2, "Aha! <code>hasattr(s,'Volume')</code> raises <code>RuntimeError: shape is invalid</code> instead of returning False. <code>hasattr</code> only catches <code>AttributeError</code>, not <code>RuntimeError</code>."],
    [37.0, 4, "Everything is in order. Let's call <code>finish</code> again with concise notes. This should deliver."]
  ];
  var STAGE_NAMES = { 1: "Analyze", 2: "Test", 3: "Build", 4: "Check" };
  function pct(m) { return (m / END * 100).toFixed(3) + "%"; }

  var track = document.getElementById("tl-track");
  SEGS.forEach(function (s) {
    var d = document.createElement("div");
    d.className = "tl-seg st-" + s[2];
    d.style.left = pct(s[0]);
    d.style.width = pct(s[1] - s[0]);
    track.appendChild(d);
  });
  var ticks = document.getElementById("tl-ticks");
  CALLS.forEach(function (c) {
    var t = document.createElement("i");
    t.className = "tl-tick " + c[1];
    t.style.left = pct(c[0]);
    ticks.appendChild(t);
  });
  var axis = document.getElementById("tl-axis");
  [0, 6, 12, 18, 24, 30, 36].forEach(function (m) {
    var s = document.createElement("span");
    s.style.left = pct(m);
    s.textContent = m;
    axis.appendChild(s);
  });

  var marks = document.getElementById("tl-marks");
  var list = document.getElementById("tl-list");
  var markEls = [], itemEls = [];
  function selectMoment(i, scroll) {
    markEls.forEach(function (m, j) { m.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    itemEls.forEach(function (it, j) { it.classList.toggle("is-active", j === i); });
    if (scroll && itemEls[i]) itemEls[i].scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  MOMENTS.forEach(function (m, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "tl-mark";
    b.style.left = pct(m[0]);
    b.textContent = i + 1;
    b.setAttribute("aria-label", "Moment " + (i + 1) + ", minute " + m[0]);
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () { selectMoment(i, false); });
    marks.appendChild(b);
    markEls.push(b);

    var li = document.createElement("li");
    li.className = "tl-item";
    li.innerHTML = '<span class="tl-n">' + (i + 1) + '</span><span class="tl-min">min ' + m[0].toFixed(1) + '</span><span class="tl-q"><span class="chip st-' + m[1] + '">' + STAGE_NAMES[m[1]] + '</span>\u201c' + m[2] + '\u201d</span>';
    li.addEventListener("click", function () { selectMoment(i, false); });
    list.appendChild(li);
    itemEls.push(li);
  });
  /* Markers that sit close together are spread over up to three rows so their numbers stay readable. */
  function layoutMarks() {
    var w = marks.getBoundingClientRect().width || 700;
    var lastX = [-99, -99, -99], maxRow = 0;
    markEls.forEach(function (b, i) {
      var x = MOMENTS[i][0] / END * w;
      var row = 0;
      while (row < 2 && x - lastX[row] < 24) row++;
      lastX[row] = x;
      maxRow = Math.max(maxRow, row);
      b.style.top = (2 - row * 26) + "px";
    });
    marks.style.marginTop = (maxRow * 26) + "px";
  }
  layoutMarks();
  selectMoment(1, false);
  window.addEventListener("resize", layoutMarks);


})();
