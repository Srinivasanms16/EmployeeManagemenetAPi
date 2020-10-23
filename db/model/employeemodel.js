const mongoose = require("mongoose");
const validator = require("validator")

const schema = new mongoose.Schema({
    fname:{
        type:String,
        trim:true,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("email validation fails")
            }
        }
    },
    dob:{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isDate(value,"DD/MM/YYYY"))
            {
                throw new Error("not valid date.")
            }
        }
    },
    role:{
        type:String,
        trim:true,
        required:true,
        enum:["Manager","Developer","Lead","Tester"]
    },
    manager:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true,toJSON:{virtuals:true},toObject:{virtuals:true}});



// schema.pre("save",function(next){
//     if(this.isModified("manager"))
//     {
//         this.manager = mongoose.Types.ObjectId(this.manager);
//     }
//     next();
// })

// schema.pre("update",function(next){
//     if(this.getUpdate().manager)
//     {
//         this.setUpdate({manager:mongoose.Types.ObjectId(this.getUpdate().manager)})
//     }
//     next();
// })


const model = mongoose.model("employee",schema);

module.exports = model;