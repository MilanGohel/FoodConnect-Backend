
const mongoose = require('mongoose');
const { Schema } = mongoose;

const availabilitySchema = new Schema({
    donor_id:{
        type: Schema.types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    status:{
        type: String,
        default: 'available',
    },
    people_serve:{
        type: Number,
        requird: true
    },
    collection_time:{
        type: Date,
    },
    notes:{
        type: String,
    }
},{timestamps: true})


const virtual = availabilitySchema.virtual('id');
virtual.get(function (){
    return this._id;
})

availabilitySchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) {
        delete ret._id;
    }  
})
exports.User = mongoose.model('User',userSchema)