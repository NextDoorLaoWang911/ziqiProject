const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create Schema
const ProfileSchema = new Schema({
    type:{
        type:String
    },
    describe:{   //描述
        type:String
    },
    incode:{   //收入
        type:String,
        required:true
    },
    expend:{   //支出
        type:String,
        required:true
    },
    cash:{  //现金
        type:String,
        required:true
    },
    remake:{  //备注
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})

module.exports = profile = mongoose.model("profile",ProfileSchema);
