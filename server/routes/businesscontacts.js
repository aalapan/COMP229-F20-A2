let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let listController = require('../controllers/businesscontacts')
router.get('/', requireAuth, listController.displayContactList);

router.get('/update/:id', requireAuth, listController.displayUpdatePage);

router.post('/update/:id', requireAuth, listController.processUpdatePage);

router.get('/delete/:id', requireAuth, listController.performDelete);

module.exports = router;