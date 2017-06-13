# angular-rpc
[![Build Status](https://travis-ci.org/osechet/angular-rpc.svg?branch=master)](https://travis-ci.org/osechet/angular-rpc)
>An RPC library for Angular.

## Testing
The following command run unit & integration tests that are in the `tests` folder, and unit tests that are in `src` folder:
```Shell
npm test
```

## Building
The following command:
```Shell
npm run build
```
- starts _TSLint_ with _Codelyzer_
- starts _AoT compilation_ using _ngc_ compiler
- creates `dist` folder with all the files of distribution

> If you get errors during the building process or bundles are not created, set _silent_ to false in the _build.js_ file to check what's going wrong: warnings on the first execution of _rollup_ are normal, and also the errors on _tsc_ are a known issue.

To test locally the npm package:
```Shell
npm run pack-lib
```
Then you can install it in an app to test it:
```Shell
npm install [path]angular-rpc-[version].tgz
```

## Publishing
Before publishing the first time:
- you can register your library on [Travis CI](https://travis-ci.org/): you have already configured `.travis.yml` file
- you must have a user on the _npm_ registry: [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

```Shell
npm run publish-lib
```

## Documentation
To generate the documentation, this starter uses [compodoc](https://github.com/compodoc/compodoc):
```Shell
npm run compodoc
npm run compodoc-serve
```

## Using the library
### Installing
```Shell
npm install angular-rpc --save
```
### Loading
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'angular-rpc': 'node_modules/angular-rpc/bundles/angular-rpc.umd.js'
    }
});
```
#### Angular-CLI
No need to set up anything, just import it in your code.
#### Rollup or webpack
No need to set up anything, just import it in your code.
#### Plain JavaScript
Include the `umd` bundle in your `index.html`:
```Html
<script src="node_modules/angular-rpc/bundles/angular-rpc.umd.js"></script>
```
and use global `ng.rpcAngular` namespace.

## License
MIT
