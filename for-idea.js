global = {};

console = {
    'log': function() {},
    'warn': function() {},
    'info': function() {},
    'dir': function() {}
};

define = function() {};

process = {
  'cwd': function() {},
  'exit': function() {},
  'stdout': function() {},
  'argv': []
};

stat = {
  'isDirectory': function() {},
  'isFile': function() {}
};

fs = {
  'stat': function() {},
  'statSync': function() {},
  'readdir': function() {},
  'readdirSync': function() {},
  'readFile': function() {},
  'readFileSync': function() {},
  'writeFile': function() {},
  'writeFileSync': function() {},
  'mkdir': function() {},
  'mkdirSync': function() {},
  'unlink': function() {},
  'unlinkSync': function() {},
  'rmdir': function() {},
  'rmdirSync': function() {},
  'realpath': function() {},
  'realpathSync': function() {}
};

path = {
  'dirname': function() {},
  'basename': function() {},
  'existsSync': function() {},
  'extname': function() {}
};

vm = {
  'runInNewContext': function() {}
};

var FileReader = function() {};
FileReader.prototype.readAsDataURL = function() {};
FileReader.prototype.onload = function() {};

res = {
  on: function() {}
};

events = {
  'EventEmitter': function() {}
};

util = {
  'inherits': function() {}
};

assert['throws'] = function() {};

request = {
  'socket': {
    setTimeout: function() {}
  }
};

zlib = {
  'gzip': function() {}
};
