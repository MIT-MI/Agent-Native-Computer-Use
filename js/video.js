/* Figure 7: run videos, one tab per task. */
(function () {
  "use strict";

  var VIDEOS = {
    enclosure: { file: "enclosure", stat: "MCP server: 21/21 in 86 s, 1.8M tokens. Computer use: 13/21 in 90 min, 59.9M tokens. Without REA: 2/21 in 90 min, 5.2M tokens.", label: "the enclosure task" },
    plate: { file: "board-plate", stat: "MCP server: 9/9 in 25 s, 0.6M tokens. Computer use: 3/9 in 20 min, 13.2M tokens. Without REA: 3/9 in 19 min, 1.0M tokens.", label: "the board-plate task" },
    lid: { file: "lid-vent", stat: "MCP server: 13/13 in 44 s, 0.6M tokens. Computer use: 7/13 in 40 min, 22.1M tokens. Without REA: 2/13 in 40 min, 1.3M tokens.", label: "the lid-vent task" }
  };
  var video = document.getElementById("vid");
  var vidStat = document.getElementById("vid-stat");
  var buttons = document.querySelectorAll("[data-vid]");
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var v = VIDEOS[b.getAttribute("data-vid")];
      video.pause();
      video.poster = "media/v6/" + v.file + ".jpg";
      video.src = "media/v6/" + v.file + ".mp4";
      video.setAttribute("aria-label", "DeepSeek V4.1 Flash on " + v.label + ": computer use on the left, its MCP server built with REA in the middle, and the server built without REA on the right");
      vidStat.textContent = v.stat;
      buttons.forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
    });
  });
})();
