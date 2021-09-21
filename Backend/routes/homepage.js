const express = require('express');
const router= express.Router();


const homeController =require('../controllers/homepage');
const {getPreferences} = require('../controllers/homepage')
const Auth = require('../Authentication/is-auth');

router.get('/home/allCourses',homeController.allCourses);
router.get('/home/:course',homeController.fetchCourses);
router.get('/home/:course',Auth.authentication,homeController.preferenceCourses);
router.post('/home/interests',Auth.authentication, getPreferences);



module.exports = router;
