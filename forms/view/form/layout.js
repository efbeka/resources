var layout = exports;
var viewful = require('../../../view/lib/viewful');

// TODO: use resource.view.create instead of directly referencing view lib
var controls = new viewful.View({ path: __dirname + '/controls', input: 'html' });
controls.load();

//
// Remark: Bind controls to layout for convience
//
layout.controls = controls;

layout.renderControl = function (control, options, callback) {
  var output = "", _control, v;
  //
  // determine the type of control to render
  //
  _control = "string"; // forcing everything to string input as default for now

  if (control.private === true) {
    // do not render
    return callback(null, '');
  }

  if(control.type === "boolean") {
    _control = "boolean";
  }

  if(Array.isArray(control.enum)){
    _control = "enum";
  }

  if (typeof control.key !== 'undefined') {
    _control = "key";
  }

  //
  // determine if there is a View available for that type of control
  //
  if(typeof controls.inputs[_control] === 'undefined') {
    throw new Error('invalid control ' + _control);
  }

  //
  // If there is an index.js available, use that as the presenter,
  // if not, use the control itself
  //
  v = controls.inputs[_control].index || controls.inputs[_control];

  // Present the View template
  v.present(control, options, callback);
}
