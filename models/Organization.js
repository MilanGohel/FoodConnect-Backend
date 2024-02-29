const mongoose = require('mongoose')
const { Schema } = mongoose;

const organizationSchema = new Schema({
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
        default: 'organization'
    },
    addresses:{
        type: [Schema.Types.Mixed],

    },
    acceptance_status:{
        type: String,
        default: 'pending'
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


const virtual = organizationSchema.virtual('id');
virtual.get(function (){
    return this._id;
})

organizationSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) {
        delete ret._id;
    }  
})
exports.User = mongoose.model('Organization',organizationSchema)