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
})({"iJCKn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2b21c25474b1d776";
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

},{}],"latK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
function render() {}
//FÖRSLAG:
//FAVORITER JUST NU
//TOPPLISTA
//SPARA EGNA FAVORITER
//ELEMENT OCH EVENTLISTENERS
const inputEl = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const searchResultTV = document.getElementById("results-tvdb");
const searchResultMovies = document.getElementById("results-stream");
//const showMovieInfo = document.getElementById("movie-info");
const showTVInfo = document.getElementById("tv-info");
//const showMovieInfo = document.getElementById("movie-info");
//const allResultsEl = document.getElementById("result-container");
const toplistEl = document.getElementById("toplist");
const streamingEl = document.getElementById("streaming-services");
//submitBtn.addEventListener("click", searchMovies, false);
submitBtn.addEventListener("click", displayTV, false);
//SÖKER EFTER TV-PROGRAM
async function searchDBtv() {
    let inputValue = inputEl.value;
    const url = `https://api.themoviedb.org/3/search/tv?query=${inputValue}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0"
        }
    };
    const response = await fetch(url, options);
    const result = await response.json();
    //display(result);
    //console.log("Fetch TV:", url, result); //FUNKAR
    return result;
//console.log("DB Test res:", result.results[0].original_title);             
}
//VISA SÖKRESULTAT, TV
async function displayTV() {
    searchResultTV.innerHTML = "";
    //showMovieInfo.innerHTML = "";
    const tvshows = await searchDBtv();
    //console.log("tvtest:", tvshows);
    // movies.forEach((movie) => {  
    for(i = 0; i < tvshows.results.length; i++){
        //console.log("Res:", tvshows.results[i].name);//VISAR RÄTT, ALLA FILMERS TITEL
        let listOfTvshowsEl = document.createElement("div");
        listOfTvshowsEl.dataset.id = tvshows.results[i].id;
        listOfTvshowsEl.classList.add("results-tv-item");
        posterEl = "https://image.tmdb.org/t/p/w45" + tvshows.results[i].poster_path;
        //console.log("BILD TV:", posterEl);//VISAR RÄTT:TITELN PÅ ALLA FILMER
        //let movieText = document.createTextNode(movies.results[i].title);
        //listOfMoviesEl.appendChild(movieText);
        //listOfMoviesEl.className = "results-stream";
        listOfTvshowsEl.innerHTML = `<div class = "results-item-thumbnail">
    <img src = ${posterEl}>
  </div>
  <div class = "results-item-info">
  <h3>${tvshows.results[i].name}</h3>
  <h4>(TV-serie)</h4>
  <p>${tvshows.results[i].first_air_date}</p>
  </div>
  `;
        searchResultTV.appendChild(listOfTvshowsEl);
    }
    makeLinksTV();
}
//displayTV();
//VARFÖR FUNKAR INTE INPUT EN ANDRA GÅNG? MÅSTE FÖRST TRYCKA PÅ UPPDATERA, SEDAN FUNKAR DET ATT SÖKA IGEN
//SKAPA LÄNKAR AV VARJE TV-RESULTAT
async function makeLinksTV() {
    const searchedTVshows = searchResultTV.querySelectorAll(".results-tv-item");
    //LÄGG TILL LÄNKAR PÅ ALLA SÖKRESULTAT
    searchedTVshows.forEach((searched)=>{
        searched.addEventListener("click", async ()=>{
            //NÄR ANV KLICKAR PÅ ETT SÖKRESULTAT, FÖRSVINNER ALLA RESULTAT
            searchResultMovies.classList.replace("results-stream", "hide-search-list");
            searchResultTV.classList.replace("results-tvdb", "hide-search-list");
            inputEl.value = "";
            //VID KLICK GÖRS ETT NYTT API-ANROP
            const url = `https://api.themoviedb.org/3/tv/${searched.dataset.id}?language=en-US`;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0"
                }
            };
            const result = await fetch(url, options);
            const tvDetails = await result.json();
            console.log("TV-RESULTAT FR\xc5N NYTT API-ANROP:", tvDetails);
            //console.log("TEST:", result );
            //HÄMTA OCKSÅ DATA FRÅN ANNAT API (TYP INFO OM SKÅDISARNA)
            //displayInfo(movieDetails);
            getIMDBid(tvDetails);
        });
    });
}
//HÄMTA IMDB-ID FÖR ATT SEDAN GÖRA ANROP TILL OMDB OCH FÅ LISTA PÅ SKÅDISAR OSV
async function getIMDBid(tvDetails) {
    let tvID = tvDetails.id;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0"
        }
    };
    const response = await fetch(`https://api.themoviedb.org/3/tv/${tvID}/external_ids`, options);
    const result = await response.json();
    let IMDBid = result.imdb_id;
    console.log("TEST omdb:", IMDBid);
    const responseOMDB = await fetch(`http://www.omdbapi.com/?apikey=68bda63a&i=${IMDBid}`);
    const resultOMDB = await responseOMDB.json();
    //return resultOMDB;
    //console.log("OMDB-TV-resultat:", resultOMDB.Ratings);
    getInfoOmdbTV(resultOMDB, tvDetails);
    getStreamers(IMDBid);
}
//VISA OLIKA RATINGS I DOM (FUNKAR)
async function getInfoOmdbTV(resultOMDB, tvDetails) {
    let genreArray = tvDetails.genres.map((a)=>a.name).join(" | ").toString();
    //console.log("Array", array.toString());
    //console.log("VARFÖR:", tvDetails.poster_path);
    //let actors = resultOMDB.Actors
    showTVInfo.innerHTML = `<div class = "tv-info">
<img src= "https://image.tmdb.org/t/p/w185/${tvDetails.poster_path}><br/>
<h1 class = "movie-title">${tvDetails.name}</h1><br/>
<h4 class = "actors">Sk\xe5despelare: ${resultOMDB.Actors}</h4><br/>  
<p id="overwiew">${tvDetails.overview}</p>
<ul class = "misc-info">
<li id="year"><b>Premi\xe4rdatum: </b>${tvDetails.first_air_date}</li> 
<li id="length"><b>L\xe4ngd: </b>${tvDetails.episode_run_time[0]}</li>
<li id="genre"><b>Genre: </b>${genreArray}</li></ul>
<ul class="misc-info id="misc-ratings>
<li class="score" id="averageScore" ><b>Medelbetyg: </b>${tvDetails.vote_average}</li>`;
    let array = resultOMDB.Ratings;
    for(let i1 = 0; i1 < array.length; i1++)//<div class = "movie-info">
    showTVInfo.innerHTML += `<ul class="misc-info id="misc-ratings">
  <li class="score"><b>${array[i1].Source}:</b> ${array[i1].Value}</li>`;
    let seasonArray = tvDetails.seasons;
    for(let i1 = 0; i1 < seasonArray.length; i1++)showTVInfo.innerHTML += `<div id="seasons">
  <img src="https://image.tmdb.org/t/p/w92/${seasonArray[i1].poster_path}>
  <p class="seasons">${seasonArray[i1].name} Antal avsnitt: ${seasonArray[i1].episode_count}</p></div>`;
}
//WATCHMODE:  4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR
//getStreamLogos();
//Hämta loggorna till streamingtjänster (ej kopplat till vilken serie som sökts)
async function getStreamLogos() {
    let url = `https://api.watchmode.com/v1/sources/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR&regions=US`;
    const response = await fetch(url, {
        method: "Get"
    });
    const result = await response.json();
    let jsonstr = JSON.stringify(result);
    localStorage.setItem("logs", jsonstr);
    console.log("H\xe4mta bilder:", jsonstr); //Funkar
    getFromLocalStorage();
//result[i].logo_100px
}
function getFromLocalStorage() {
    let items = JSON.parse(localStorage.getItem("logs"));
    let networkArray = [];
    for(i = 0; i < items.length; i++){
        //skapa en array med NAMN på streamingtjänst och BILD, alltså logga
        networkArray.push(items[i].name, items[i].logo_100px);
        return networkArray;
    }
    console.log("H\xe4mtat fr\xe5n localStorage:", networkArray);
}
//HÄMTA alla STREAMINGTJÄNSTER som visar aktuell serie
async function getStreamers(IMDBid) {
    let fetchedID = IMDBid;
    //&search_value=Breaking%20bad&search_type=1'
    let url = `https://api.watchmode.com/v1/title/${fetchedID}/sources/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR&regions=US`;
    const response = await fetch(url, {
        method: "Get"
    });
    const result = await response.json();
    //return result;
    showStreamers(result);
    console.log("Finns regionen med?", result);
    let gotLogos = await getStreamLogos();
    console.log("Komplicerad man\xf6ver:", gotLogos);
//Filtrera så endast gratis och prenumeration kommer med
/*for(let i = 0; i < result.length; i++){
    if(result[i].type === "sub" || result[i].type === "free" || result[i].type === "tve"){
      for(let i; i < gotLogos.length; i++){
        if(result[i].name === gotLogos[i].name){
          let logoArray = [];
          logoArray.push(gotLogos[i].logo_100px);
          //return logoArray;
          //logoImg++;
          console.log("Alla logos som är aktuella:", logoArray); 
        }
      }
    }
  }*/ }
//let pics = result[i].logo_100px;
//console.log("Hämta alla logos:", result[0].logo_100px);
/*let extractedValue = [];

  //return result;
 for(i = 0; i < result.length; i++){
  //let onlyLogo = result[i].logo_10px
    extractedValue.push(result[i].logo_100px);
  

    //localStorage.setItem(`logga`, JSON.stringify(result[i].logo_100px));
    
  }*/ /*`<button id="hide-info">Dölj</button>`;

let hideBtn = document.getElementById("hide-info");
let seasonEl = document.getElementById("seasons");
hideBtn.addEventListener("click", hideInfo, false);


function hideInfo(){
  seasonEl.classList.add("hide-search-list");
}*/ //VISA STREAMARE som visar aktuell serie (US)
//streamingEl, toplistEl
async function showStreamers(result) {
    let streamers = result;
    let fetchedLogo = await getStreamLogos();
    console.log("Fungerar h\xe4mt logos:", fetchedLogo);
    let headerEl = document.createElement("h2");
    let headerText = document.createTextNode("Streamingtj\xe4nster");
    headerEl.appendChild(headerText);
    streamingEl.appendChild(headerEl);
    //Filtrera så endast gratis och prenumeration kommer med
    for(let i1 = 0; i1 < streamers.length; i1++){
        if (streamers[i1].type === "sub" || streamers[i1].type === "free" || streamers[i1].type === "tve") for(let i1; i1 < fetchedLogo.length; i1++){
            if (streamers[i1].name === fetchedLogo[i1].name) {
                let logoArray = [];
                logoArray.push(fetchedLogo[i1].logo_100px);
                //return logoArray;
                //logoImg++;
                console.log("Alla logos som \xe4r aktuella:", logoArray);
            }
            //console.log("Filtered streaming:", streamers[i].name, streamers[i].type, streamers[i].region);
            streamers[i1].name.forEach((stream)=>{
                //för varje namn på streamingtjänst, vill jag hämta motsvarande bild från fetchedlogo
                for(let i1; i1 < stream.length; i1++){
                    //loopa genom alla fetchedLogo, ta fram de som är aktuella
                    for(let i1; i1 < fetchedLogo.length; i1++)if (stream[i1].name === fetchedLogo[i1].name) {
                        let logoImg = fetchedLogo[i1].logo_100px;
                        //logoImg++;
                        console.log("Alla logos som \xe4r aktuella:", logoImg);
                    }
                }
            });
            /*fetchedLogo.forEach(logo => {
        //result[i].logo_100px
      });*/ /*'let logoSearch = streamers; //för att kunna få fram alla streamingtjänster jag behövar loggan till

      for(let i = 0; i < logoSearch.length; i++){
        console.log("Hämta logo:", logoSearch[i].name);
      }*/ let streamingService = document.createElement("h3");
            let streamerName = document.createTextNode(streamers[i1].name);
            streamingService.appendChild(streamerName);
            let streamingCost = document.createElement("p");
            function freeORsub() {
                if (streamers[i1].type === "free") return "Gratis";
                else if (streamers[i1].type === "sub" || streamers[i1].type === "tve") return "Prenumeration kr\xe4vs";
                 //lägg också till "tve"
            }
            let streamerPay = document.createTextNode(freeORsub());
            streamingCost.appendChild(streamerPay);
            streamingEl.appendChild(streamingService);
            streamingEl.appendChild(streamingCost);
        /*console.log("Filtered streaming:", result[i].name, result[i].type, result[i].region);*/ }
    }
} /*async function getWatchMode(){
let url = 'https://api.watchmode.com/v1/releases/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR';
  const response = await fetch(url, {method: 'Get'});
  const result = await response.json();
  console.log("WATCHMODE:", result);
}

getWatchMode();*/  //IMDB Vanderpump: tt2343157
 /*async function getStreamers(){
  let url = 'https://api.watchmode.com/v1/title/tt2343157/sources/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR';
    const response = await fetch(url, {method: 'Get'});
    const result = await response.json();
    console.log("STREAMERS:", result);

    //&& result.type === "sub" || result.type === "free"

    
      for(let i = 0; i < result.length; i++){
        if(result[i].region === "US" &&  result[i].type === "sub" || result[i].type === "free"){
        console.log("Filtered streaming:", result[i].name, result[i].type, result[i].region);
      }
    }
  }*/ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["iJCKn"], null, "parcelRequire5e7a")

//# sourceMappingURL=tvshows.74b1d776.js.map
