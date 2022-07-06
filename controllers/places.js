/* eslint-disable no-console */
const router = require('express').Router();
const db = require('../models');

// GET/place
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places });
    })
    .catch((err) => {
      console.log(err);
      res.render('error404');
    });
});

// PUT
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places');
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('err', err);
      res.render('error404');
    });
});

// GET/new
router.get('/new', (req, res) => {
  res.render('places/new');
});

// ShowPage
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then((place) => {
      console.log(place.comments);
      res.render('places/show', { place });
    })
    .catch((err) => {
      console.log('err', err);
      res.render('error404');
    });
});

// PUT
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log('err', err);
      res.render('error404');
    });
});

// delete
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/places');
    })
    .catch((err) => {
      console.log('err', err);
      res.render('error404');
    });
});

// edit
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render('places/edit', { place });
    })
    .catch(() => {
      res.render('error404');
    });
});

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub');
});

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub');
});

module.exports = router;
