// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gRY1p":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
require("6a029b792b6400fb").then(function(page) {
    page.render();
});
require("8cc5e80c27c8cbb5").then(function(page) {
    page.render();
});
require("672628082934028b").then(function(page) {
    page.render();
});
//ID: 287 (BRAD PITT)
//ID: 297 (MEET JOE BLACK) fetch('https://api.themoviedb.org/3/search/movie?query=meet%20joe%20black&include_adult=false&language=en-US&page=1', options)
//REVIEWS(MOVIE-ID): fetch('https://api.themoviedb.org/3/movie/297/reviews?language=en-US&page=1', options)
//elements
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");
//event listener
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
//TA FRAM MENYN
function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");
    let style = window.getComputedStyle(navMenuEl);
    if (style.display === "none") navMenuEl.style.display = "block";
    else navMenuEl.style.display = "none";
}
//HÄMTA DATA FRÅN API 
//window.onload = init;
//function init(){
//display();
//searchDBmovie();
//displayMovies();
//searchMovies();
//processData();
//}
// En asynkron funktion som simulerar hämtning av data från en API
/*const movieSearch = document.getElementById("movie-search");//INPUT. ONCLICK OCH ONKEYUP => FINDmOVIES()
const searchList = document.getElementById("search-list");
const resultPresentation = document.getElementById("results");
const cmdbResults = document.getElementById("cmdbResults");*/ //VÄLJ EN FILM I LISTAN
//VISA INFO OM FILMEN
//VISA TIPS OM ANDRA LIKNANDE (?)
//VISA BETYG FRÅN FLERA API
//ELEMENT OCH EVENTLISTENERS
const inputEl = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const searchResult = document.getElementById("results-stream");
const showMovieInfo = document.getElementById("movie-info");
const searchResultTV = document.getElementById("results-tvdb");
//submitBtn.addEventListener("click", searchMovies, false);
submitBtn.addEventListener("click", displayMovies, false);
//SÖKFUNKTION THEMOVIEDB (loadMovies(searchword))FUNKAR INTE NÄR FUNKTIONEN TAR EMOT (SEARCHWORD) 
//SÖKER EFTER FILMER
async function searchDBmovie() {
    let inputValue = inputEl.value;
    const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0"
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        //display(result);
        //console.log("Fetch:", result); 
        return result;
    //console.log("DB Test res:", result.results[0].original_title);
    //let titleEl = result[0].original_title;
    //console.log("DB response:", titleEl);
    //displayMovies(result);
    } catch (error) {
        console.error(error);
    }
}
async function displayMovies() {
    searchResult.innerHTML = "";
    //showMovieInfo.innerHTML = "";
    const movies = await searchDBmovie();
    // movies.forEach((movie) => {  
    for(i = 0; i < movies.results.length; i++){
        //console.log("Res:", movies.results[i].title);//VISAR RÄTT, ALLA FILMERS TITEL
        let listOfMoviesEl = document.createElement("div");
        listOfMoviesEl.dataset.id = movies.results[i].id; //movies.results[i].id
        listOfMoviesEl.classList.add("results-movie-item");
        posterEl = "https://image.tmdb.org/t/p/w45" + movies.results[i].poster_path;
        console.log("DB RESULT:", movies.results[i].title); //VISAR RÄTT:TITELN PÅ ALLA FILMER
        //let movieText = document.createTextNode(movies.results[i].title);
        //listOfMoviesEl.appendChild(movieText);
        //listOfMoviesEl.className = "results-stream";
        listOfMoviesEl.innerHTML = `<div class = "results-item-thumbnail">
  <img src = ${posterEl}>
</div>
<div class = "results-item-info">
<h3>${movies.results[i].title}</h3>
<h4>(Film)</h4>
<p>${movies.results[i].release_date}</p>
</div>
`;
        searchResult.appendChild(listOfMoviesEl);
    }
    makeLinks();
}
//displayMovies();
//HETER LOADMOVIEDETAILS
async function makeLinks() {
    const searchedMovies = searchResult.querySelectorAll(".results-movie-item");
    //LÄGG TILL LÄNKAR PÅ ALLA SÖKRESULTAT
    searchedMovies.forEach((searched)=>{
        searched.addEventListener("click", async ()=>{
            //NÄR ANV KLICKAR PÅ ETT SÖKRESULTAT, FÖRSVINNER ALLA RESULTAT
            searchResult.classList.add("hide-search-list");
            searchResultTV.classList.add("hide-search-list");
            inputEl.value = "";
            //console.log("LÄNKAR:", searchedMovies.results); //FUNKAR INTE
            const url = `https://api.themoviedb.org/3/movie/${searched.dataset.id}?language=en-US`;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0"
                }
            };
            const result = await fetch(url, options);
            const movieDetails = await result.json();
            console.log("FILM-RESULTAT FR\xc5N NYTT API-ANROP:", movieDetails);
            //console.log("TEST:", result );
            //HÄMTA OCKSÅ DATA FRÅN ANNAT API
            getIMDBid(movieDetails);
        //displayInfo(movieDetails);
        });
    });
}
async function displayInfo(movieDetails) {
    //showGenres(movieDetails);
    let string = movieDetails.genres.name; //.toString();
    console.log(string);
    let array = movieDetails.genres.map((a)=>a.name).toString();
    //console.log("Array", array.toString());
    showMovieInfo.innerHTML = `<div class = "movie-info">
  <img src= "https://image.tmdb.org/t/p/w500${movieDetails.poster_path}}><br/>
  <h1 class = "movie-title">${movieDetails.title}</h1><br/>
  <p id="overwiew">${movieDetails.overview}</p>
  <ul class = "misc-info">
  <li id="year"><b>Premi\xe4rdatum: </b>${movieDetails.release_date}</li> 
  <li id="year"><b>L\xe4ngd: </b>${movieDetails.runtime}</li>
  <li id="year"><b>Genre: ${array}</b></li>
  <li id="year"><b>Medelbetyg:</b>${movieDetails.vote_average}</li>
  </div>`;
    console.log("VISA GENRE OCH MEDELBETYG:", movieDetails.genres[0].name, movieDetails.vote_average);
//ÄNDRA FORMAT PÅ RELEASEDATUM?
//SKAPA STAPEL ELLER LIKNANDE SOM VISAR BETYG
} //9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg
//HÄMTA IMDB-ID FÖR ATT SEDAN GÖRA ANROP TILL OMDB OCH FÅ LISTA PÅ SKÅDISAR OSV
async function getIMDBid(movieDetails) {
    let movieID = movieDetails.id;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0"
        }
    };
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/external_ids`, options);
    const result = await response.json();
    let IMDBid = result.imdb_id;
    console.log("TEST omdb:", IMDBid);
    const responseOMDB = await fetch(`http://www.omdbapi.com/?apikey=68bda63a&i=${IMDBid}`);
    const resultOMDB = await responseOMDB.json();
    //return resultOMDB;
    console.log("OMDB-resultat:", resultOMDB.Ratings);
    getInfoOmdb(resultOMDB, movieDetails);
//http://www.omdbapi.com/?apikey=[yourkey]&
//68bda63a
}
//VISA OLIKA RATINGS I DOM (FUNKAR)
async function getInfoOmdb(resultOMDB, movieDetails) {
    let genreArray = movieDetails.genres.map((a)=>a.name).join(" | ").toString();
    //console.log("Array", array.toString());
    console.log("VARF\xd6R:", movieDetails.poster_path);
    //let actors = resultOMDB.Actors
    showMovieInfo.innerHTML = `<div class = "movie-info">
<img src= "https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}}><br/>
<h1 class = "movie-title">${movieDetails.title}</h1><br/>
<h4 class = "actors">Sk\xe5despelare: ${resultOMDB.Actors}</h4><br/>  
<p id="overwiew">${movieDetails.overview}</p>
<ul class = "misc-info">
<li id="year"><b>Premi\xe4rdatum: </b>${movieDetails.release_date}</li> 
<li id="length"><b>L\xe4ngd: </b>${movieDetails.runtime}</li>
<li id="genre"><b>Genre: </b>${genreArray}</li></ul>
<ul class="misc-info id="misc-ratings>
<li class="score" id="averageScore" ><b>Medelbetyg: </b>${movieDetails.vote_average}</li>

</div>`;
    let array = resultOMDB.Ratings;
    for(let i1 = 0; i1 < array.length; i1++)//<div class = "movie-info">
    showMovieInfo.innerHTML += `<ul class="misc-info id="misc-ratings>
      <li class="score"><b>${array[i1].Source}:</b> ${array[i1].Value}</li>`;
//searchResult.appendChild(listOfActorsEl);
} /*
  let partialArray = movieDetails.genres.map((item) => {
    {name: item.name};
    return JSON.stringify(partialArray);
  })
     movieDetails.forEach(detail => {
    return [detail.genres.name].join(" , ");
  })

  }*/ 

},{"6a029b792b6400fb":"e3gJH","8cc5e80c27c8cbb5":"kPb6u","672628082934028b":"chScT"}],"e3gJH":[function(require,module,exports) {
module.exports = require("8f68b68a889d62ec")(require("428db3d5e384e742").getBundleURL("g05j8") + "tvshows.74b1d776.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("latK6"));

},{"8f68b68a889d62ec":"61B45","428db3d5e384e742":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"kPb6u":[function(require,module,exports) {
module.exports = require("a3660278ae97fde2")(require("79723f0a7dec583d").getBundleURL("g05j8") + "omdb.abb0b846.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("9PNYO"));

},{"a3660278ae97fde2":"61B45","79723f0a7dec583d":"lgJ39"}],"chScT":[function(require,module,exports) {
module.exports = require("b97b22c9fc8e6ca3")(require("d640471135cc31b4").getBundleURL("g05j8") + "tvapi.6bbc5a6b.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("7SUvA"));

},{"b97b22c9fc8e6ca3":"61B45","d640471135cc31b4":"lgJ39"}]},["gRY1p","ebWYT"], "ebWYT", "parcelRequire5e7a")

//# sourceMappingURL=index.739bf03c.js.map
