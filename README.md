# jensenchappell.com

Source for [jensenchappell.com](https://jensenchappell.com), served by GitHub Pages from `master`.

It's a single static page: `index.html`, styles in `style/style.scss`, images in `asset/`.
The compiled `style/style.css` is committed, because GitHub Pages serves the repo as-is.

## Working on it

```bash
npm install
npm start
```

`npm start` compiles the Sass, watches it for changes, and opens a live-reloading preview.

After editing `style/style.scss`, make sure `style/style.css` is rebuilt (`npm run build`) and committed.
