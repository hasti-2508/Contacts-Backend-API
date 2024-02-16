const mongoose = require("mongoose")

const contactSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: [true, "please, add the contact name"]
        },
        email:{
            type: String,
            require:[true,"please add email address"]
        },
        phone:{
            type: String,
            require:[true,"please add phone number"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Contact",contactSchema);  