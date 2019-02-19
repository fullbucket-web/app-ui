const router = require('express').Router();
const redditStrategy = require('./authStrategies/reddit');

router.use('/reddit', redditStrategy);

module.exports = router;
