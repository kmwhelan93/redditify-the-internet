const { FuseBox, CSSPlugin, SassPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  plugins: [
    [SassPlugin(), CSSPlugin()],
    CSSPlugin()
  ]
});

fuse.bundle("app")
  .instructions("> index.ts");

fuse.run();