const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogpostRoutes');

router.use('/users', userRoutes);
router.use('/blogpost', blogPostRoutes);

module.exports = router;
