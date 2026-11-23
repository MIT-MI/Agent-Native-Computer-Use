/* Figure A3: run videos, one tab per task. */
(function () {
  "use strict";

  var VIDEOS = {
    enclosure: { file: "enclosure", stat: "MCP server: 21/21 in 86 s, 1.8M tokens. Computer use: 13/21 in 90 min, 59.9M tokens.", label: "the enclosure task" },
    plate: { file: "board-plate", stat: "MCP server: 9/9 in 25 s, 0.61M tokens. Computer use: 3/9 in 20 min, 13.2M tokens.", label: "the board-plate task" },
    lid: { file: "lid-vent", stat: "MCP server: 13/13 in 44 s, 0.64M tokens. Computer use: 7/13 in 40 min, 22.2M tokens.", label: "the lid-vent task" }
  };
  var video = document.getElementById("vid");
  var vidStat = document.getElementById("vid-stat");
  var buttons = document.querySelectorAll("[data-vid]");
  /* Fetch every poster up front, so a tab switch does not wait for the network. */
  Object.keys(VIDEOS).forEach(function (k) { new Image().src = "media/v6/" + VIDEOS[k].file + ".jpg"; });
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var v = VIDEOS[b.getAttribute("data-vid")];
      /* Swap in a new element. A reused one keeps showing the previous poster until the new image has loaded. */
      var next = video.cloneNode(false);
      next.poster = "media/v6/" + v.file + ".jpg";
      next.src = "media/v6/" + v.file + ".mp4";
      next.setAttribute("aria-label", "The agent on " + v.label + ", computer use on the left and its MCP server on the right");
      video.pause();
      video.replaceWith(next);
      video.removeAttribute("src");
      video.load();
      video = next;
      vidStat.textContent = v.stat;
      buttons.forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
    });
  });
})();
