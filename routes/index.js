exports.index = function(req, res){
  res.render('index', { title: 'index' });
};

exports.about = function(req, res){
  res.render('about', { title: 'about' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'contact' });
};