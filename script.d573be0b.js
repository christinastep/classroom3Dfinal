// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/script.js":[function(require,module,exports) {
window.addEventListener('load', function () {
  if (window.matchMedia('(min-width: 640px)').matches) {
    if (document.querySelector('body').classList.contains("hp")) {

      // 3d truc
      //var gameInstance =  UnityLoader.instantiate("gameContainer", "Build/BienManger.json");



      var showSlides = function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
          slideIndex = 1;
        }

        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 7000); // Change image every 2 seconds
      };

      //slider
      var slideIndex = 0;
      showSlides();

      window.onscroll = function () {
        if (document.documentElement.scrollTop > window.innerHeight * 0.01) {
          console.log("test");
          introFadeOut();
          document.querySelector('.intro__tablau').classList.add('toWhite');
          document.querySelector('.teaser').classList.add('fadeIn');

          if (document.documentElement.scrollTop > window.innerHeight * 0.6) {
            document.querySelector('.intro__rang--left').style.right = "-43vw";
            document.querySelector('.intro__rang--right').style.left = "-43vw";
            document.querySelector('.intro__tablau').classList.add("toTop");
            document.querySelector('.teaser').style.opacity = "0";
            document.querySelector('.avantages').style.top = "-20vw";

            if (document.documentElement.scrollTop > window.innerHeight * 0.9) {
              document.querySelector('.bg').classList.add('moveUp');

              if (document.documentElement.scrollTop > window.innerHeight * 1.9) {
                console.log("yes");
                document.querySelector('.moeble').classList.add('moveUp');
              } else {
                document.querySelector('.moeble').classList.remove('moveUp');
              }
            } else {
              document.querySelector('.bg').classList.remove('moveUp');
            }
          } else {
            document.querySelector('.intro__rang--left').style.right = "-20vw";
            document.querySelector('.intro__rang--right').style.left = "0.vw";
            document.querySelector('.intro__tablau').classList.remove("toTop");
            document.querySelector('.intro__rang--right').classList.remove('fadeOutOutOut');
            document.querySelector('.intro__rang--left').classList.remove('fadeOutOutOut');
            document.querySelector('.teaser').style.opacity = "1";
            document.querySelector('.intro__clock').style.opacity = "0";
          }
        } else {
          document.querySelector('.intro__rang--left').classList.remove('fadeOut');
          document.querySelector('.intro__rang--right').classList.remove('fadeOut');
          document.querySelector('.intro__teacher').classList.remove('fadeOut');
          document.querySelector('.intro__tablau').classList.remove('toWhite');
          document.querySelector('.tableau__text--1').classList.remove('fadeOut');
          document.querySelector('.arrow').classList.remove('fadeOut');
          document.querySelector('.teaser').classList.remove('fadeIn');
          document.querySelector('.intro__rang--left').style.right = "0vw";
          document.querySelector('.intro__rang--right').style.left = "0.vw";
          document.querySelector('.teaser').style.opacity = "0";
          document.querySelector('.intro__clock').style.opacity = "1";
        }
      };
    }
  }

  if (document.querySelector('body').classList.contains("comptbody")) {
    document.querySelector(".compt__link--salle").addEventListener("click", function () {
      var navigationLink = document.querySelectorAll(".compt__link");
      var comptContent = document.querySelectorAll(".compt__content");

      for (var i = 0; i < navigationLink.length; i++) {
        if (navigationLink[i].classList.contains("active")) {
          navigationLink[i].classList.remove("active");
        }
      }

      for (var _i = 0; _i < comptContent.length; _i++) {
        if (comptContent[_i].classList.contains("active")) {
          comptContent[_i].classList.remove("active");
        }
      }

      document.querySelector(".compt__link--salle").classList.add("active");
      document.querySelector(".compt__content--salle").classList.add("active");
    });
    document.querySelector(".compt__link--commandes").addEventListener("click", function () {
      var navigationLink = document.querySelectorAll(".compt__link");
      var comptContent = document.querySelectorAll(".compt__content");

      for (var i = 0; i < navigationLink.length; i++) {
        if (navigationLink[i].classList.contains("active")) {
          navigationLink[i].classList.remove("active");
        }
      }

      for (var _i2 = 0; _i2 < comptContent.length; _i2++) {
        if (comptContent[_i2].classList.contains("active")) {
          comptContent[_i2].classList.remove("active");
        }
      }

      document.querySelector(".compt__link--commandes").classList.add("active");
      document.querySelector(".compt__content--commandes").classList.add("active");
    });
  } else {
    document.querySelector('.end__buttonsuper').addEventListener("click", function () {
      console.log("click end");
      document.querySelector('.intro__tablau').classList.add('commande');
      document.querySelector('body').classList.remove('hp');
      document.querySelector('body').classList.add('statusCommande');
      document.querySelector('body').classList.add('step1');
      document.querySelector('.barProgression__point--1').style.backgroundColor = "#48437D";
      document.querySelector('.barProgression--active').style.width = "0%";
      introFadeOut();
      document.querySelector('.tableau__text--1').style.opacity = "0";
      document.querySelector('.intro__teacher').style.left = "-20vw";
      document.querySelector('.down').style.opacity = "0";
    });
    document.querySelector('.intro__button').addEventListener("click", function () {
      document.querySelector('.intro__tablau').classList.add('commande');
      document.querySelector('body').classList.remove('hp');
      document.querySelector('body').classList.add('statusCommande');
      document.querySelector('body').classList.add('step1');
      document.querySelector('.barProgression__point--1').style.backgroundColor = "#48437D";
      document.querySelector('.barProgression--active').style.width = "0%";
      introFadeOut();
    });
    document.querySelector(".button__commande--1").addEventListener("click", function () {
      console.log("click2");
      document.querySelector(".tableau__commande--1").style.opacity = "0";
      document.querySelector(".tableau__commande--2").style.zIndex = "5";
      document.querySelector(".tableau__commande--2").style.opacity = "1";
      document.querySelector('.barProgression__point--2').style.backgroundColor = "#48437D";
      document.querySelector('.barProgression--active').style.width = "20%";
    });
    document.querySelector(".button__commande--2").addEventListener("click", function () {
      console.log("click3");
      document.querySelector(".tableau__commande--2").style.opacity = "0";
      document.querySelector(".tableau__commande--3").style.zIndex = "5";
      document.querySelector(".tableau__commande--3").style.opacity = "1";
      document.querySelector('.barProgression__point--3').style.backgroundColor = "#48437D";
      document.querySelector('.barProgression--active').style.width = "40%";
    });
    document.querySelector(".button__commande--3").addEventListener("click", function () {
      console.log("click4");
      document.querySelector(".tableau__commande--3").style.opacity = "0"; //tableau

      document.querySelector(".intro__tablau").style.top = "2vh";
      document.querySelector(".intro__tablau").style.left = "1vw";
      document.querySelector(".intro__tablau").style.height = "96vh";
      document.querySelector(".intro__tablau").style.width = "98vw"; //header

      document.querySelector("header").style.top = "-6vw";
      document.querySelector('.barProgression').style.top = "-5vw"; //children

      document.querySelector(".intro__rang--left").style.right = "-43vw";
      document.querySelector(".intro__rang--right").style.left = "-43vw"; //elements

      document.querySelector(".tableau__commande--4").style.zIndex = "5";
      document.querySelector(".tableau__commande--4").style.opacity = "1";
      document.querySelector(".tableau__commande--4").style.zIndex = "100";
      document.querySelector(".teaser").style.display = "none";
    });
    document.querySelector(".button__commande--4").addEventListener("click", function () {
      console.log("click5");
      document.querySelector(".teaser").style.display = "block";
      document.querySelector(".tableau__commande--4").style.zIndex = "0";
      document.querySelector(".tableau__commande--4").style.opacity = "0";
      document.querySelector(".tableau__commande--5").style.zIndex = "5";
      document.querySelector(".tableau__commande--5").style.opacity = "1"; //header

      document.querySelector("header").style.top = "0";
      document.querySelector('.barProgression').style.top = "2.2vw"; //tableau

      document.querySelector(".intro__tablau").style.top = "15vh";
      document.querySelector(".intro__tablau").style.left = "15vw";
      document.querySelector(".intro__tablau").style.height = "80vh";
      document.querySelector(".intro__tablau").style.width = "70vw"; //children

      document.querySelector(".intro__rang--left").style.right = "-23vw";
      document.querySelector(".intro__rang--right").style.left = "-23vw";
      document.querySelector('.barProgression__point--4').style.backgroundColor = "#48437D";
      document.querySelector('.barProgression--active').style.width = "60%";
    });
    document.querySelector(".button__commande--5").addEventListener("click", function () {
      console.log("click6");
      document.querySelector(".tableau__commande--5").style.opacity = "0";
      document.querySelector(".tableau__commande--5-1").style.zIndex = "5";
      document.querySelector(".tableau__commande--5-1").style.opacity = "1";
    });
    document.querySelector(".button__commande--5-1--back").addEventListener("click", function () {
      console.log("click7 good");
      document.querySelector(".tableau__commande--5-1").style.opacity = "0";
      document.querySelector(".tableau__commande--5-2").style.zIndex = "5";
      document.querySelector(".tableau__commande--5-2").style.opacity = "1";
    });
    document.querySelector(".button__commande--5-2--back").addEventListener("click", function () {
      console.log("click8 good");
      document.querySelector(".tableau__commande--5-2").style.opacity = "0";
      document.querySelector(".tableau__commande--6").style.zIndex = "5";
      document.querySelector(".tableau__commande--6").style.opacity = "1";
    });
    document.querySelector(".button__commande--6--back").addEventListener("click", function () {
      console.log("click9");
      document.querySelector(".tableau__commande--6").style.opacity = "0";
      document.querySelector(".tableau__commande--7").style.zIndex = "5";
      document.querySelector(".tableau__commande--7").style.opacity = "1";
      document.querySelector('.barProgression__point--5').style.backgroundColor = "#48437D";
      document.querySelector('.barProgression--active').style.width = "80%";
    });
    document.querySelector(".button__commande--7").addEventListener("click", function () {
      console.log("click10");
      document.querySelector(".tableau__commande--7").style.opacity = "0";
      document.querySelector(".tableau__commande--8").style.zIndex = "5";
      document.querySelector(".tableau__commande--8").style.opacity = "1";
      document.querySelector('.barProgression__point--6').style.backgroundColor = "#48437D";
      document.querySelector('.barProgression--active').style.width = "100%";
    });
    document.querySelector(".button__commande--8").addEventListener("click", function () {
      console.log("click10");
      document.querySelector(".tableau__commande--8").style.opacity = "0";
      document.querySelector(".tableau__commande--9").style.zIndex = "5";
      document.querySelector(".tableau__commande--9").style.opacity = "1";
    });
  }
});

function introFadeOut() {
  document.querySelector('.intro__rang--left').classList.add('fadeOut');
  document.querySelector('.intro__rang--right').classList.add('fadeOut');
  document.querySelector('.intro__teacher').classList.add('fadeOut');
  document.querySelector('.tableau__text--1').classList.add('fadeOut');
  document.querySelector('.arrow').classList.add('fadeOut');
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65085" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.map