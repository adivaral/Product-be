const mongoose=require('mongoose');
const config=require('../../env');
mongoose.connect(`${config.DB_URL}/products`,{
    useUnifiedTopology: true,
});
mongoose.connection.on('connected',()=>{
    console.log('Connected to server....');
});
