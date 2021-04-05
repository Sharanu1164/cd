let mongoose = require('mongoose');

// Student Schema...
const Student = mongoose.model('Student', {
 name:
    {
        type:String,
        required:true,
        minlength:3

    },
     email:{
            type:String,
            required:true,
            unique:[true,'Email id Already present'],
            validate(value){
                if(!validator.isEmail(value))
                {
                    throw new error("Invalid id..");
                }
            }
        },
        phone:
        {
            type:Number,
            max:10,
            min:10,
            required:true,
            unique:true
        },
        address:
        {
            type:String,
            required:true
        }

    });

module.exports = {Student};

//duplicate code
