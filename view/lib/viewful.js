var viewful = exports;

viewful.engines = {};
viewful.engines['html'] = {};
viewful.engines['html'].render = require('./engines/html').render;
viewful.engines['swig'] = {};
viewful.engines['swig'].init = require('./engines/swig').init;
viewful.engines['swig'].render = require('./engines/swig').render;

viewful.View = require('./View');

//
// Remark:
//
//    Server-Side Load = fs module
//    Client-Side Load = async Script object
//
//
viewful.load = function (path, callback) {
  var view = new viewful.View();
  return view.load(path, callback);
}