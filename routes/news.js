var express = require('express');
var router = express.Router();
const News = require('../model/news')

/* GET home page. */
router.get('/', function(req, res, next) {
  const search = req.query.search || ''

  const findNews = News.find({title: new RegExp(search.trim(), 'i')}).sort({created: -1})
  data.exec((err, data) => {
  res.render('news', {title: 'News', data, search})
  })
});

module.exports = router;