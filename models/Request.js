
const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema({
    organization_id:{
        type: Schema.types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    
    status:{
        type: String,
        default: 'pending',
    },
    collection_time:{
        type: Date,

    },
    notes:{
        type: String,
    }
},{timestamps: true})


const virtual = requestSchema.virtual('id');
virtual.get(function (){
    return this._id;
})

requestSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) {
        delete ret._id;
    }  
})
exports.User = mongoose.model('User',userSchema)