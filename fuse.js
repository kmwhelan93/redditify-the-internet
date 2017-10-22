const {
    FuseBox,
    EnvPlugin,
    SVGPlugin,
    CSSPlugin,
    BabelPlugin,
    QuantumPlugin,
    WebIndexPlugin,
    Sparky,
    SassPlugin
} = require('fuse-box');

let fuse, app, isProduction, outputFolder = "dist/", idName = "redditify-the-web";

Sparky.task('config', () => {
    fuse = new FuseBox({
        homeDir: 'src/',
        log: true,
        debug: true,
        sourceMaps: !isProduction,
        target: 'browser',
        output: outputFolder + '$name.js',
        useTypescriptCompiler: true,
        experimentalFeatures: true,
        plugins: [
            EnvPlugin({ NODE_ENV: isProduction ? 'production' : 'development', ID_NAME: idName}),
            SVGPlugin(),
            [SassPlugin(), CSSPlugin()],
            CSSPlugin(),
            WebIndexPlugin({
                template: 'src/index.html'
            })
        ]
    });

    // bundle app
    app = fuse.bundle('contentscript').instructions('>index.tsx');
});

Sparky.task('default', ['clean', 'config'], () => {
    fuse.dev();
    // add dev instructions
    app.watch().hmr();
    return fuse.run();
});

Sparky.task('clean', () => Sparky.src(outputFolder).clean(outputFolder));
Sparky.task('prod-env', ['clean'], () => {
    isProduction = true;
});

Sparky.task("extension-env", ['clean'], () => {
    idName = "redditify-the-web-extension";
});

Sparky.task("extension-copy", () => {
    return Sparky.watch("./extension/**/**.*").dest(outputFolder + "$name")
});

Sparky.task('extension', ['extension-env', 'extension-copy', 'config'], () => {
    // comment out to prevent dev server from running (left for the demo)
    app.watch();
    return fuse.run();
});