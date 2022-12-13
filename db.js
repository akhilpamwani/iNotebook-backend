const mongoose=require('mongoose');
const mongoURL='mongodb://0.0.0.0:27017/iNoteBook'; 
const connectToMongoose=()=>{
  mongoose.connect(mongoURL)
  .then(async() => {
   await console.log("Connected to Database");
})
.catch(async(err) => {
    await console.log("Not Connected to Database ERROR! ", err);
});
}
mongoose.set('strictQuery', false);
module.exports=connectToMongoose