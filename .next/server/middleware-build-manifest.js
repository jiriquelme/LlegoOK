self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/QRscanner": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/QRscanner.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/confirmacionRecepcion": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/confirmacionRecepcion.js"
    ],
    "/entrega-ya-realizada": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/entrega-ya-realizada.js"
    ],
    "/historial": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/historial.js"
    ],
    "/recepcion-manual": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/recepcion-manual.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];