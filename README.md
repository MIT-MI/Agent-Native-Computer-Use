# Blind Computer Use

Static blog post. No build step and no dependencies besides Google Fonts.

```
index.html          the post
css/style.css       layout, light and dark themes
js/pipeline.js      Figure 1, the clickable build loop
js/timeline.js      Figure 2, the build timeline
js/video.js         Figure 7, the run videos with one tab per task
media/chart-*.svg   Figures 4 to 6 (FreeCAD, DeepSeek V4.1 Flash) and 8 to 9 (Fruit Ninja, Kimi K3), the result charts
media/v6/*.mp4      run videos: computer use against the MCP server, with the build shown first (FreeCAD with DeepSeek V4.1 Flash; Fruit Ninja with Kimi K3)
media/v6/*.jpg      video posters
```

Preview locally:

```sh
python3 -m http.server 8000
# open http://localhost:8000/
```
