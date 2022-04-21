const router = require('express').Router();

const reportsRoute = require('./reportsRoute');
const assessRoute = require('./assessRoute');

router.use('/reports', reportsRoute);
router.use('/', assessRoute);

module.exports = router;