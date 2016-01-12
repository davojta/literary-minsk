System.config({
  baseURL: "/literary-minsk/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  paths: {
    "github:*": "/literary-minsk/jspm_packages/github/*",
    "npm:*": "/literary-minsk/jspm_packages/npm/*",
    "bower:*": "/literary-minsk/jspm_packages/bower/*"
  },
  buildCSS: false,
  separateCSS: false,

  meta: {
    "leaflet": {
      "deps": [
        "github:systemjs/plugin-css@0.1.12",
        "./leaflet.css!"
      ],
      "format": "amd"
    }
  },

  map: {
    "PreloadJS": "bower:PreloadJS@0.6.1",
    "SoundJS": "bower:SoundJS@0.6.1",
    "TweenJS": "bower:TweenJS@0.6.1",
    "babel": "npm:babel-core@5.8.34",
    "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.4.0",
    "babel-preset-stage-0": "npm:babel-preset-stage-0@6.3.13",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.12",
    "jquery": "github:components/jquery@2.1.4",
    "json": "github:systemjs/plugin-json@0.1.0",
    "leaflet": "github:Leaflet/Leaflet@0.7.3",
    "leaflet-hash": "github:mlevans/leaflet-hash@master",
    "lodash": "npm:lodash@3.9.3",
    "oclazyload-systemjs-router": "github:lookfirst/oclazyload-systemjs-router@1.2.1",
    "octavioturra/color2color": "github:octavioturra/color2color@master",
    "velocity": "github:julianshapiro/velocity@1.2.3",
    "github:angular-ui/ui-router@0.2.13": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:lookfirst/oclazyload-systemjs-router@1.2.1": {
      "angular": "github:angular/bower-angular@1.3.15",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.13",
      "oclazyload": "github:ocombe/ocLazyLoad@1.0.0-alpha2",
      "ui-router-extras": "github:christopherthielen/ui-router-extras@0.0.13"
    },
    "github:systemjs/plugin-css@0.1.12": {
      "clean-css": "npm:clean-css@3.1.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:amdefine@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.6.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-code-frame@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "chalk": "npm:chalk@1.1.1",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@1.0.2",
      "line-numbers": "npm:line-numbers@0.2.0",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-helper-bindify-decorators@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.3.13": {
      "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-helper-define-map@6.3.13": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.4.0",
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-types": "npm:babel-types@6.4.1",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-helper-explode-assignable-expression@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-helper-explode-class@6.3.13": {
      "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-helper-function-name@6.4.0": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-helper-get-function-arity@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-helper-hoist-variables@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-helper-remap-async-to-generator@6.3.13": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.4.0",
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-messages@6.3.18": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-syntax-async-functions@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-syntax-class-constructor-call@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-syntax-class-properties@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-syntax-decorators@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-syntax-do-expressions@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-syntax-exponentiation-operator@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-syntax-export-extensions@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-syntax-function-bind@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-syntax-object-rest-spread@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-syntax-trailing-function-commas@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-transform-async-to-generator@6.4.0": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.3.13",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-transform-class-constructor-call@6.4.0": {
      "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-template": "npm:babel-template@6.3.13"
    },
    "npm:babel-plugin-transform-class-properties@6.4.0": {
      "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-transform-decorators@6.4.0": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.3.13",
      "babel-helper-explode-class": "npm:babel-helper-explode-class@6.3.13",
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-template": "npm:babel-template@6.3.13",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-plugin-transform-do-expressions@6.3.13": {
      "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.4.0": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.3.13",
      "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-template": "npm:babel-template@6.3.13"
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.3.13": {
      "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.3.13",
      "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-transform-export-extensions@6.4.0": {
      "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-transform-function-bind@6.3.13": {
      "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-transform-object-rest-spread@6.3.13": {
      "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.3.13",
      "babel-runtime": "npm:babel-runtime@5.5.8"
    },
    "npm:babel-plugin-transform-strict-mode@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-types": "npm:babel-types@6.4.1"
    },
    "npm:babel-preset-stage-0@6.3.13": {
      "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.3.13",
      "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.3.13",
      "babel-preset-stage-1": "npm:babel-preset-stage-1@6.3.13"
    },
    "npm:babel-preset-stage-1@6.3.13": {
      "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.4.0",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.4.0",
      "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.4.0",
      "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.4.0",
      "babel-preset-stage-2": "npm:babel-preset-stage-2@6.3.13"
    },
    "npm:babel-preset-stage-2@6.3.13": {
      "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.3.13",
      "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.3.13",
      "babel-preset-stage-3": "npm:babel-preset-stage-3@6.3.13"
    },
    "npm:babel-preset-stage-3@6.3.13": {
      "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.4.0",
      "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.3.13"
    },
    "npm:babel-runtime@5.5.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-template@6.3.13": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "babel-types": "npm:babel-types@6.4.1",
      "babylon": "npm:babylon@6.4.2",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:babel-traverse@6.3.26": {
      "babel-code-frame": "npm:babel-code-frame@6.3.13",
      "babel-messages": "npm:babel-messages@6.3.18",
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-types": "npm:babel-types@6.4.1",
      "babylon": "npm:babylon@6.4.2",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.18.0",
      "invariant": "npm:invariant@2.2.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3"
    },
    "npm:babel-types@6.4.1": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "babel-traverse": "npm:babel-traverse@6.3.26",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@3.10.1",
      "to-fast-properties": "npm:to-fast-properties@1.0.1"
    },
    "npm:babylon@6.4.2": {
      "babel-runtime": "npm:babel-runtime@5.5.8",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.43",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.6.2",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:line-numbers@0.2.0": {
      "left-pad": "npm:left-pad@0.0.3"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@3.9.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.3.0",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.6.2",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
