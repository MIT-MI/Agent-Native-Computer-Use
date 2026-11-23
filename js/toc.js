/* The contents list beside the article: show it after the title, and mark the section being read. */
(function () {
  "use strict";

  var toc = document.getElementById("toc");
  if (!toc) return;
  var links = Array.prototype.slice.call(toc.querySelectorAll("a"));
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });
  var article = document.querySelector("article");
  var ticking = false;

  function update() {
    ticking = false;
    toc.classList.toggle("is-shown", article.getBoundingClientRect().top < 120);
    var current = 0;
    targets.forEach(function (t, i) {
      if (t && t.getBoundingClientRect().top < 160) current = i;
    });
    links.forEach(function (a, i) {
      var on = i === current;
      a.classList.toggle("is-current", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      /* A sub-item also marks its section. */
      var parent = a.parentNode.parentNode.parentNode;
      if (on && parent.tagName === "LI") parent.firstElementChild.classList.add("is-current");
    });
  }

  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
