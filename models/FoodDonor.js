const mongoose = require('mongoose');
const { Schema } = mongoose;

const donorSchema = new Schema({
    email: {
        type:String, 
        required: true,
        unique: true
    },
    password: { 
        type: Buffer,
        required: true
     },
    role:{
        type: String,
        default: 'food_donor'
    },
    addresses:{
        type: [Schema.Types.Mixed],
    },
    salt:{
        type: Buffer
    },
    name:{
        type: String,
        required: true,
    },
    city:{
        type:String,
        required: true
    },
    pinCode:{
        type: Number,
        required: true
    },
    resetPasswordToken: {
        type: String, default:''
    }
},{timestamps: true})


const virtual = donorSchema.virtual('id');
virtual.get(function (){
    return this._id;
})

donorSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) {
        delete ret._id;
    }  
})
exports.User = mongoose.model('Donor',donorSchema)