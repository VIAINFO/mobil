window.AppPlayer = { Version: '1.15.3' };
System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  production: true,
  buildConfig: {
    "paths": {
      "github:*": "jspm_packages/github/*",
      "npm:*": "jspm_packages/npm/*",
      "designerLayout/*": "../FrontEnd/designerLayout/*",
      "appPlayer/*": "../FrontEnd/appPlayer/distr/*",
      "modules/*": "../FrontEnd/modules/*",
      "appPlayerLib/*": "../lib/*"
    }
  },
  productionConfig: {
    "paths": {
      "appPlayerLib/*": "lib/*",
      "modules/*": "modules@1.15.3/*",
      "main-bundles/*": "bundles@1.15.3/*"
    },
    "bundles": {
      "main-bundles/appPlayerLoader.js!loadIndicator": [
        "index.js",
        "appPlayer/loader.js"
      ],
      "main-bundles/appPlayer.js!loadIndicator": [
        "appPlayer/appPlayerLoader.js"
      ],
      "main-bundles/libLoader.js!loadIndicator": [
        "appPlayer/libLoader.js"
      ],
      "main-bundles/devextremeLoader.js!loadIndicator": [
        "appPlayer/devextremeLoader.js"
      ]
    }
  },
  devConfig: {
    "paths": {
      "github:*": "http://localhost:1337/jspm_packages/github/*",
      "npm:*": "http://localhost:1337/jspm_packages/npm/*",
      "designerLayout/*": "http://localhost:1337/frontEnd/designerLayout/*",
      "appPlayer/*": "http://localhost:1337/frontEnd/appPlayer/distr/*",
      "modules/*": "http://localhost:1337/frontEnd/modules/*",
      "appPlayerLib/*": "http://localhost:1337/lib/*"
    }
  },

  meta: {
    "designerLayout/designerLayout": {
      "deps": [
        "designerLayout/designerLayout.less!less",
        "designerLayout/designerLayout.html!text",
        "devextreme/dx.all"
      ],
      "globals": {
        "jQuery": "jquery",
        "htmlTemplate": "designerLayout/designerLayout.html!text"
      }
    },
    "bootstrap/bootstrap": {
      "deps": [
        "jquery"
      ],
      "globals": {
        "jQuery": "jquery"
      }
    },
    "devextreme/dx.all": {
      "deps": [
        "jquery"
      ],
      "globals": {
        "jQuery": "jquery"
      }
    },
    "dust/dust-full": {
      "format": "global"
    },
    "dust/dust-helpers": {
      "deps": [
        "dust/dust-full"
      ],
      "globals": {
        "dust": "dust/dust-full"
      }
    },
    "globalize-dist/globalize": {
      "format": "global",
      "globals": {
        "Cldr": "cldrjs"
      }
    },
    "appPlayer/appPlayer": {
      "format": "global"
    },
    "devextreme/layouts/*": {
      "format": "global",
      "deps": [
        "jquery"
      ],
      "globals": {
        "jQuery": "jquery"
      }
    }
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "appPlayerLib/Scripts",
    "bootstrap/css": "appPlayerLib/Content",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.26",
    "devextreme": "appPlayerLib/devextreme/js",
    "devextreme/css": "appPlayerLib/devextreme/css",
    "devextreme/layouts": "appPlayerLib/devextreme/layouts",
    "dust": "appPlayerLib/dust",
    "globalize": "npm:globalize@1.1.2",
    "globalize-dist": "npm:globalize@1.1.2/dist",
    "globalize-module": "npm:globalize@1.1.2/dist/globalize",
    "jquery": "npm:jquery@2.1.1",
    "json": "github:systemjs/plugin-json@0.1.2",
    "knockout": "github:knockout/knockout@3.4.0",
    "less": "npm:systemjs-less-plugin@1.8.3",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:globalize@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cldrjs": "npm:cldrjs@0.4.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:jquery@2.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
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
