# Images

Drop your project images in this folder, then reference them from `content.js`.

## How to add an image to a project

1. Save the image file here, e.g. `transfer-tool.jpg` (or .png).
2. In `content.js`, set the project's `image` field to the path:

   ```js
   image: "images/transfer-tool.jpg",
   ```

3. To add extra images inside the detail view, use the `gallery` field:

   ```js
   gallery: [
     { src: "images/transfer-1.jpg", caption: "The step-by-step verification flow" },
     { src: "images/transfer-2.jpg", caption: "Generated transfer package" }
   ],
   ```

## Tips

- If `image` is left as `""`, the card uses an auto-generated warm gradient — so the
  site always looks finished, even before you add pictures.
- Card images look best at a wide ratio (roughly 16:8). ~1200px wide is plenty.
- Keep file names lowercase with no spaces (use hyphens): `risk-matrix.jpg`, not `Risk Matrix.JPG`.
