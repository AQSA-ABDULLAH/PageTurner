const mongoose = require("mongoose");

const conn = async () => {
    try{
        await mongoose.connect("url");
    }catch (error){
        console.log(error);
    }
};
conn();