let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'ERROR: Missing username'
        },

       email:
       {
            type: String,
            default: '',
            trim: true,
            required: 'ERROR: Missing e-mail address'
       },
       displayName:
       {
            type: String,
            default: '',
            trim: true,
            required: 'ERROR: Missing display name'
       },
       created:
       {
             type: Date,
             default: Date.now, 
       },
       update:
       {
           type: Date,
           default: Date.now
       },

    },
    {
        collection: "users"
    }
);

let options = ({ missingPasswordError: 'Wrong/Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);