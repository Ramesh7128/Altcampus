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
})({"project.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Create a board object.
// create a list object.
// create an item object.
// Constructor function for board object.
// create a board object. with all boards as entry,
// sample trello object.
// let trello = {
//     boards: {
//         board1: {
//             boardName: board1, 
//             lists: {
//                 list1: {
//                     listname: list1,
//                     items: {
//                          item1: {
//                                itemName: item1,
//                          },...
//                      }    
//                 }
//             }
//         }
//     } 
// }
// single board setup.
// let board = {
//     lists = [{
//         listName:list1,
//         tasks: [{taskName: task1}],
//     }],
// }
var Trello = function Trello(appName) {
  _classCallCheck(this, Trello);

  this.appName = appName;
  this.UniqueBoards = [];
  this.boards = [];
};

var Board = function Board(boardName) {
  _classCallCheck(this, Board);

  this.boardName = boardName;
  this.UniqueLists = [];
  this.lists = [];
};

var List = function List(listName) {
  _classCallCheck(this, List);

  this.listName = listName;
  this.tasks = [];
};

var Task = function Task(taskName) {
  _classCallCheck(this, Task);

  this.taskName = taskName;
};

var newApp = null; // create board object and render board;

var sampleBoard = new Board('SampleBoard'); // renderBoardLists();

function listInputSectionGenerator() {
  var newInputListDiv = document.createElement('div');
  newInputListDiv.id = 'div-input-list';
  newInputListDiv.classList.add('div-input');
  newInputListDiv.textContent = 'Add New List';
  newInputListDiv.classList.add('list-section');
  document.getElementById('task-board').appendChild(newInputListDiv);
  var newInputElement = document.createElement('input');
  newInputElement.id = 'input-list';
  document.getElementById('div-input-list').appendChild(newInputElement);
}

function taskInputGenerator(listId) {
  var newInputTaskDiv = document.createElement('div');
  newInputTaskDiv.id = "div-input-task-".concat(listId);
  newInputTaskDiv.classList.add('div-input');
  newInputTaskDiv.textContent = 'Add New Task';
  document.getElementById(listId).appendChild(newInputTaskDiv);
  var newInputElement = document.createElement('input');
  newInputElement.id = "input-task-".concat(listId);
  newInputElement.classList.add('div-task-input'); // newInputElement.dataset.listId = listId.

  document.getElementById("div-input-task-".concat(listId)).appendChild(newInputElement);
}

function tasksListGenerator(listId) {
  // render all tasks
  var boardIndex = document.getElementById('board-selector').value;
  listIndex = listId.split('-')[listId.split('-').length - 1];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = newApp.boards[boardIndex].lists[listIndex].tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var task = _step.value;
      var newTaskLi = document.createElement('li');
      newTaskLi.textContent = task.taskName;
      newTaskLi.classList.add('task-li');
      document.getElementById(listId).appendChild(newTaskLi);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  taskInputGenerator(listId);
}

function listSectionGenerator(boardIndex) {
  for (var _list_index in newApp.boards[boardIndex].lists) {
    var newListDiv = document.createElement('div');
    newListDiv.id = "".concat(newApp.boards[boardIndex].boardName, "-").concat(_list_index);
    newListDiv.classList.add('list-section');
    newListDiv.textContent = newApp.boards[boardIndex].lists[_list_index].listName;
    document.getElementById('task-board').appendChild(newListDiv);
    var newUl = document.createElement('ul');
    newUl.id = "".concat(newApp.boards[boardIndex].boardName, "-ul-").concat(_list_index);
    document.getElementById("".concat(newApp.boards[boardIndex].boardName, "-").concat(_list_index)).appendChild(newUl);
    tasksListGenerator("".concat(newApp.boards[boardIndex].boardName, "-ul-").concat(_list_index));
  }

  listInputSectionGenerator();
}

function renderBoardLists(boardIndex) {
  // iterate through the list array of boards and tasks array of lists.
  document.getElementById('task-board').innerHTML = '';

  if (boardIndex) {
    listSectionGenerator(boardIndex);
  }
}

function renderBoardsInSelect() {
  // iterate through the boards name and display in the select option.
  document.getElementById('board-selector').innerHTML = '';
  var parentSelect = document.getElementById('board-selector');
  var newOption = document.createElement('option');
  newOption.value = 99;
  newOption.textContent = 'Select a board';
  newOption.selected = 'yes';
  parentSelect.appendChild(newOption);

  for (var boardIndex in newApp.boards) {
    newOption = document.createElement('option');
    newOption.value = boardIndex;
    newOption.textContent = newApp.boards[boardIndex].boardName;
    parentSelect.appendChild(newOption);
  }
}

document.getElementById('task-board').addEventListener('keyup', function (event) {
  if (event.keyCode == 13) {
    var boardIndex = document.getElementById('board-selector').value;
    console.log(event.target.id);

    if (event.target.id == 'input-list') {
      var listName = document.getElementById('input-list').value.trim();

      if (!/^ *$/.test(listName)) {
        if (!newApp.boards[boardIndex].UniqueLists.includes(listName.toLowerCase())) {
          var newList = new List(listName);
          newApp.boards[boardIndex].lists.push(newList);
          newApp.boards[boardIndex].UniqueLists.push(listName.toLowerCase());
        } else {
          alert('This board contains a list with the same name already.');
        }

        renderBoardLists(boardIndex);
      }
    } else {
      var taskName = document.getElementById(event.target.id).value.trim();
      list_index = event.target.id.split('-')[event.target.id.split('-').length - 1];
      var newTask = new Task(taskName);
      newApp.boards[boardIndex].lists[list_index].tasks.push(newTask);
      console.log();
      renderBoardLists(boardIndex);
    }
  }
});
document.getElementById('input-board').addEventListener('keyup', function () {
  if (event.keyCode == 13) {
    var boardName = document.getElementById('input-board').value.trim();
    document.getElementById('input-board').value = '';

    if (!/^ *$/.test(boardName)) {
      if (!newApp.UniqueBoards.includes(boardName.toLowerCase())) {
        var newBoard = new Board(boardName);
        newApp.boards.push(newBoard);
        newApp.UniqueBoards.push(boardName.toLowerCase());
      } else {
        alert('A board with the given name already exists.');
      }

      renderBoardsInSelect(); // renderBoardLists();
    }
  }
});
document.getElementById('board-selector').addEventListener('change', function (event) {
  if (event.target.value != 99) {
    var boardIndex = event.target.value;
    console.log(boardIndex);
    renderBoardLists(boardIndex);
  } else {
    renderBoardLists();
  }
});

function init() {
  newApp = new Trello('AltCampus');
}

init();
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46341" + '/');

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
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","project.js"], null)
//# sourceMappingURL=/project.b5dfbff8.map