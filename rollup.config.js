import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/http': 'ng.http',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx'
};

export default {
    entry: './dist/modules/angular-rpc.es5.js',
    dest: './dist/bundles/angular-rpc.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.angularRpc',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}