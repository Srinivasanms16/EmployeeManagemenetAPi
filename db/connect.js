const mongoose = require("mongoose");

try{

mongoose.connect(process.env.MONGODB,
{ useNewUrlParser: true,  
    useUnifiedTopology: true,
    useCreateIndex: true}
    );
}
catch(e){

    console.log(e);

}

