var express = require('express');
const News = require('../models/news')
var router = express.Router();


router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('login')

        return;
    }

    next()
})
/* GET home page. */
router.get('/', function(req, res, next) {
News.find({}, (err, data) => {
res.render('admin/index', {title: 'Admin', data });
});
});

router.get('/news/add', (req, res, next) => {
 res.render('admin/news-form', { title: 'Add news', body: {}, errors: {} });
})

router.post('/news/add', (req, res, next) => {
    const body = req.body
      const newsData = new News(body)
      const errors = newsData.validateSync();


  newsData.save((err) => {
     if (err) {
         res.render('admin/news-form', { title: 'add news', errors, body })
         return;
     }
     res.redirect('/admin')
   });
});
router.get('/news/delete/:id', (req, res, next) => {
    News.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/admin')
    })
})

module.exports = router;