exports.render = function (view, data, cb) {
  var cheerio = require('cheerio'),
      str;
  if(typeof view.parent !== "undefined" && typeof view.parent.layout !== "undefined" && typeof view.parent.layout.present === 'function') {
    var $ = cheerio.load(view.parent.layout.present());
    $('#main').html(view.template);
  } else {
    var $ = cheerio.load(view.template);
  }
  str = $.html();
  if (cb) {
    return cb(null, str);
  } else {
    return str;
  }
}
