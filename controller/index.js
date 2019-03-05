const express = require('express');
const router  = express.Router();

// GET Root endpoint (hateOAS root)
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
