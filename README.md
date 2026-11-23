# Blind Computer Use

Static blog post. No build step and no dependencies besides Google Fonts.

```
index.html          the post
css/style.css       layout, light and dark themes
js/pipeline.js      Figure 1, the clickable build loop
js/timeline.js      Figure A1, the build timeline in the appendix
js/video.js         Figure 5, the run videos with one tab per task
js/toc.js           the contents list beside the article
media/chart-*.svg   Figures 2 to 4 (FreeCAD, DeepSeek V4.1 Flash) and 6 to 7 (Fruit Ninja, Kimi K3), the result charts
media/v6/*.mp4      run videos: computer use against the MCP server, with the build shown first (FreeCAD with DeepSeek V4.1 Flash; Fruit Ninja with Kimi K3)
media/v6/*.jpg      video posters
```

Preview locally:

```sh
python3 -m http.server 8000
# open http://localhost:8000/
```
