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
})({"js/board.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trello = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Trello =
/*#__PURE__*/
function () {
  function Trello(appName) {
    var _this = this;

    _classCallCheck(this, Trello);

    this.appName = appName;
    this.UniqueBoards = [];
    this.boards = [];
    this.node = document.createElement('div');
    this.node.classList.add('container');
    this.titleNode = document.createElement('h1');
    this.selectNode = document.createElement('select');
    this.inputNode = document.createElement('input');
    this.inputNode.id = 'input-boards';
    this.boardNode = document.createElement('div');
    this.boardNode.classList.add('board-container');
    this.inputNode.addEventListener('keyup', function (event) {
      if (event.keyCode == 13) {
        var boardInput = document.getElementById('input-boards');
        var boardInputValue = boardInput.value;

        if (!/^ *$/.test(boardInputValue)) {
          if (!_this.UniqueBoards.includes(boardInputValue.toLowerCase())) {
            // create a new board object with appname and board name.
            // add the board object to boards list and unique board list.
            var newBoard = new Board(_this.appName, boardInputValue);

            _this.boards.push(newBoard);

            _this.UniqueBoards.push(boardInputValue.toLowerCase());

            _this.renderApp();
          } else {
            alert('A board with the given name already exists.');
          }
        }
      }
    });
    this.selectNode.addEventListener('change', function (event) {
      var boardIndex = event.target.value;
      var board = _this.boards[boardIndex];
      _this.boardNode.innerHTML = '';
      board.renderBoard();

      _this.boardNode.appendChild(board.node);
    });
  }

  _createClass(Trello, [{
    key: "renderApp",
    value: function renderApp() {
      var _this2 = this;

      this.node.innerHTML = ''; // add the app tile and append it to board node.

      this.titleNode.textContent = this.appName;
      this.node.appendChild(this.titleNode); //push all the boards to the select option after constructing the drop down options.

      this.selectNode.innerHTML = '';
      this.boards.forEach(function (board, index) {
        board.optionNode.value = index;

        _this2.selectNode.appendChild(board.optionNode);
      });
      this.node.appendChild(this.selectNode); // clear the input node.

      this.inputNode.value = '';
      this.node.appendChild(this.inputNode);
      this.node.appendChild(this.boardNode);
    }
  }]);

  return Trello;
}();

exports.Trello = Trello;

var Board =
/*#__PURE__*/
function () {
  function Board(appName, boardName) {
    var _this3 = this;

    _classCallCheck(this, Board);

    this.appName = appName;
    this.boardName = boardName;
    this.UniqueLists = [];
    this.lists = [];
    this.optionNode = document.createElement('option');
    this.optionNode.textContent = this.boardName;
    this.node = document.createElement('div');
    this.titleNode = document.createElement('h2');
    this.titleNode.textContent = this.boardName;
    this.newInputListDiv = document.createElement('div');
    this.newInputListDiv.classList.add('div-input');
    this.newInputListDiv.textContent = 'Add New List';
    this.newInputListDiv.classList.add('list-section');
    this.newInputListDiv.classList.add('three');
    this.newInputListDiv.classList.add('columns');
    this.newInputElement = document.createElement('input');
    this.newInputElement.addEventListener('keyup', function (event) {
      if (event.keyCode == 13) {
        var listInputValue = event.target.value;

        if (!/^ *$/.test(listInputValue)) {
          if (!_this3.UniqueLists.includes(listInputValue.toLowerCase())) {
            var newList = new List(_this3.appName, _this3.boardName, listInputValue);

            _this3.lists.push(newList);

            _this3.UniqueLists.push(listInputValue.toLowerCase());

            _this3.renderBoard();
          } else {
            alert('A List with the given name already exists in this board.');
          }
        }
      }
    });
  }

  _createClass(Board, [{
    key: "renderBoard",
    value: function renderBoard() {
      var _this4 = this;

      this.node.innerHTML = '';
      this.node.appendChild(this.titleNode);
      this.lists.forEach(function (list, index) {
        _this4.node.appendChild(list.node);
      }); // add new lists in boards.

      this.newInputListDiv.appendChild(this.newInputElement);
      this.node.appendChild(this.newInputListDiv);
    }
  }]);

  return Board;
}();

var List =
/*#__PURE__*/
function () {
  function List(appName, boardName, listName) {
    var _this5 = this;

    _classCallCheck(this, List);

    this.listName = listName;
    this.appName = appName;
    this.boardName = boardName;
    this.listName = listName;
    this.tasks = [];
    this.node = document.createElement('div');
    this.node.classList.add('div-input');
    this.titleNode = document.createElement('h3');
    this.titleNode.textContent = this.listName;
    this.node.appendChild(this.titleNode);
    this.node.classList.add('list-section');
    this.node.classList.add('three');
    this.node.classList.add('columns');
    this.taskSectionDiv = document.createElement('div');
    this.node.appendChild(this.taskSectionDiv);
    this.newInputTaskDiv = document.createElement('div');
    this.newInputTaskDiv.classList.add('div-input');
    this.newInputTaskDiv.textContent = 'Add New Task';
    this.newInputElement = document.createElement('input');
    this.newInputTaskDiv.appendChild(this.newInputElement);
    this.node.appendChild(this.newInputTaskDiv);
    this.newInputElement.addEventListener('keyup', function (event) {
      var taskInputValue = event.target.value;

      if (event.keyCode == 13) {
        if (!/^ *$/.test(taskInputValue)) {
          var newTask = new Task(_this5.appName, _this5.boardName, _this5.listName, taskInputValue);

          _this5.tasks.push(newTask);

          _this5.renderList();
        }
      }
    });
  }

  _createClass(List, [{
    key: "renderList",
    value: function renderList() {
      var _this6 = this;

      // display all tasks.
      this.tasks.forEach(function (task, index) {
        _this6.taskSectionDiv.appendChild(task.node);
      });
    }
  }]);

  return List;
}();

var Task = function Task(appName, boardName, listName, taskName) {
  _classCallCheck(this, Task);

  this.appName = appName;
  this.boardName = boardName;
  this.listName = listName;
  this.taskName = taskName;
  this.node = document.createElement('div');
  this.taskElement = document.createElement('p');
  this.taskElement.textContent = this.taskName;
  this.node.appendChild(this.taskElement);
};
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "32799" + '/');

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
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/board.js"], null)
//# sourceMappingURL=/board.150adbaf.map