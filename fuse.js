const { FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin, Sparky, SourceMapPlainJsPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  root: ['dist', 'src'],
  output: "dist/$name.js",
  sourceMaps: true,
  log: true,
  debug: true,
  plugins: [
    [SassPlugin(), CSSPlugin()],
    CSSPlugin(),
    WebIndexPlugin({path: "."})
  ],
  sourceMap: {
	  bundleReference: "sourcemaps.js.map",
	  outFile: "sourcemaps.js.map",
	},
});

fuse.dev();

fuse.bundle("app")
  .instructions("> index.ts")
  .watch()
  .hmr();

Sparky.task("clean", () => {
  return Sparky.src("dist").clean("dist");
});

Sparky.task("watch:images", () => {
  return Sparky.watch("**/*.+(svg|png|jpg|gif)", {base: "./src"})
    .dest("./dist");
});

Sparky.task("default", ["clean", "watch:images"], () => {
  fuse.run();
});