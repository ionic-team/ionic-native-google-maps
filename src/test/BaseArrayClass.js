var BaseClass = require('./BaseClass');

var ARRAY_FIELD = typeof Symbol === 'undefined' ? '__array' + Date.now() : Symbol('array');

var resolvedPromise = typeof Promise == 'undefined' ? null : Promise.resolve();
var nextTick = resolvedPromise ? function(fn) { resolvedPromise.then(fn); } : function(fn) { setTimeout(fn); };

class BaseArrayClass extends BaseClass {
  constructor(array) {
    super();
    var self = this;
    self[ARRAY_FIELD] = [];

    if (array && (array instanceof Array || Array.isArray(array))) {
      for (var i = 0; i < array.length; i++) {
        self[ARRAY_FIELD].push(array[i]);
      }
    }
  }

  mapSeries(fn, callback) {
    if (typeof fn !== "function" || typeof callback !== "function") {
      return;
    }
    var self = this;

    var results = [];
    var _arrayLength = self[ARRAY_FIELD].length;
    if (_arrayLength === 0) {
      callback.call(self, []);
      return;
    }
    var _looper = function(currentIdx) {
      fn.call(self, self[ARRAY_FIELD][currentIdx], function(value) {
        results[currentIdx] = value;
        if (_arrayLength === results.length) {
          callback.call(self, results);
        } else {
          nextTick(function() {
            _looper(currentIdx + 1);
          });
        }
      });
    };
    nextTick(function() {
      _looper(0);
    });
  };

  mapAsync(fn, callback) {
    if (typeof fn !== "function" || typeof callback !== "function") {
      return;
    }
    var self = this;
    //------------------------
    // example:
    //    baseArray.mapAsync(function(item, idx, callback) {
    //       ...
    //       callback(value);
    //    }, function(values) {
    //
    //    });
    //------------------------
    var results = [];
    for (var i = 0; i < self[ARRAY_FIELD].length; i++) {
      results.push(null);
    }
    var _arrayLength = self[ARRAY_FIELD].length;
    var finishCnt = 0;
    if (_arrayLength === 0) {
      callback.call(self, []);
      return;
    }
    for (i = 0; i < self[ARRAY_FIELD].length; i++) {
      (function(item, idx) {
        nextTick(function() {
          fn.call(self, item, function(value) {
            results[idx] = value;
            finishCnt++;
            if (finishCnt === _arrayLength) {
              callback.call(self, results);
            }
          });
        });
      })(self[ARRAY_FIELD][i], i);
    }
  };

  map(fn, callback) {
    var self = this;

    if (typeof fn !== "function") {
      return;
    }
    var results = [];
    if (typeof fn === "function" && typeof callback !== "function") {
      //------------------------
      // example:
      //    var values = baseArray.map(function(item, idx) {
      //       ...
      //       return someValue;
      //    });
      //------------------------
      return self[ARRAY_FIELD].map(fn.bind(self));
    }
    self.mapAsync(fn, callback);
  };

  forEachAsync(fn, callback) {
    if (typeof fn !== "function" || typeof callback !== "function") {
      return;
    }
    var self = this;
    //------------------------
    // example:
    //    baseArray.forEach(function(item, callback) {
    //       ...
    //       callback();
    //    }, function() {
    //
    //    });
    //------------------------
    var finishCnt = 0;
    var _arrayLength = self[ARRAY_FIELD].length;
    if (_arrayLength === 0) {
      callback.call(self);
      return;
    }

    for (var i = 0; i < self[ARRAY_FIELD].length; i++) {
      (function(item, idx) {
        fn.call(self, item, function() {
          finishCnt++;
          if (finishCnt === _arrayLength) {
            callback.call(self);
          }
        });
      })(self[ARRAY_FIELD][i], i);
    }
  };

  forEach(fn, callback) {
    var self = this;
    if (typeof fn !== "function") {
      return;
    }

    if (typeof fn === "function" && typeof callback !== "function") {
      //------------------------
      // example:
      //    baseArray.forEach(function(item, idx) {
      //       ...
      //    });
      //------------------------
      self[ARRAY_FIELD].forEach(fn.bind(self));
      return;
    }
    self.forEachAsync(fn, callback);
  };

  filterAsync(fn, callback) {
    var self = this;
    if (typeof fn !== "function" || typeof callback !== "function") {
      return;
    }
    //------------------------
    // example:
    //    baseArray.filter(function(item, callback) {
    //       ...
    //       callback(true or false);
    //    }, function(filteredItems) {
    //
    //    });
    //------------------------
    var finishCnt = 0;
    var _arrayLength = self[ARRAY_FIELD].length;
    if (_arrayLength === 0) {
      callback.call(self, []);
      return;
    }
    var results = [];
    for (var i = 0; i < self[ARRAY_FIELD].length; i++) {
      (function(item, idx) {
        fn.call(self, item, function(isOk) {
          if (isOk) {
            results.push(item);
          }
          finishCnt++;
          if (finishCnt === _arrayLength) {
            callback.call(self, results);
          }
        });
      })(self[ARRAY_FIELD][i], i);
    }
  };

  filter(fn, callback) {
    var self = this;
    if (typeof fn !== "function") {
      return;
    }
    if (typeof fn === "function" && typeof callback !== "function") {
      //------------------------
      // example:
      //    baseArray.filter(function(item, idx) {
      //       ...
      //       return true or false
      //    });
      //------------------------
      return self[ARRAY_FIELD].filter(fn);
    }
    self.filterAsync(fn, callback);
  };

  indexOf(item) {
    return this[ARRAY_FIELD].indexOf(item);
  };

  empty(noNotify) {
    var self = this;
    var cnt = self[ARRAY_FIELD].length;
    for (var i = 0; i < cnt; i++) {
      self.removeAt(0, noNotify);
    }
  };

  push(value, noNotify) {
    var self = this;
    self[ARRAY_FIELD].push(value);
    if (noNotify !== true) {
      self.trigger("insert_at", self[ARRAY_FIELD].length - 1);
    }
    return self[ARRAY_FIELD].length;
  };

  insertAt(index, value, noNotify) {
    var self = this;
    if (index > self[ARRAY_FIELD].length) {
      for (var i = self[ARRAY_FIELD].length; i <= index; i++) {
        self[ARRAY_FIELD][i] = undefined;
      }
    }
    self[ARRAY_FIELD][index] = value;
    if (noNotify !== true) {
      self.trigger("insert_at", index);
    }
  };

  getArray() {
    //return _array.slice(0);  <-- Android browser keeps the same instance of original array
    return JSON.parse(JSON.stringify(this[ARRAY_FIELD]));
  };

  getAt(index) {
    return this[ARRAY_FIELD][index];
  };

  setAt(index, value, noNotify) {
    var self = this;
    var prev = self[ARRAY_FIELD][index];
    self[ARRAY_FIELD][index] = value;
    if (noNotify !== true) {
      self.trigger("set_at", index, prev);
    }
  };

  removeAt(index, noNotify) {
    var self = this;
    var value = self[ARRAY_FIELD][index];
    self[ARRAY_FIELD].splice(index, 1);
    if (noNotify !== true) {
      self.trigger("remove_at", index, value);
    }
    return value;
  };

  pop(noNotify) {
    var self = this;
    var index = self[ARRAY_FIELD].length - 1;
    var value = self[ARRAY_FIELD].pop();
    if (noNotify !== true) {
      self.trigger("remove_at", index, value);
    }
    return value;
  };

  getLength() {
    return this[ARRAY_FIELD].length;
  };

  reverse() {
    this[ARRAY_FIELD] = this[ARRAY_FIELD].reverse();
  };

  sort(func) {
    this[ARRAY_FIELD] = this.sort(func);
  };

}

module.exports = BaseArrayClass;