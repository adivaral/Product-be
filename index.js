const express=require('express');
const app = express();
const bodyParser = require('body-parser');
const config=require('./env')
const cors = require('cors');
require('./src/connection/connection');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Admin routes
const adminget=require('./src/routes/Admin/adminGet');
const adminPost=require('./src/routes/Admin/adminPost');
const adminUpdate=require('./src/routes/Admin/adminUpdateById');
const adminDelete=require('./src/routes/Admin/adminDelete');
const adminById=require('./src/routes/Admin/admingetById');
const adminLoginCreate =require('./src/routes/Admin/adminLoginCreate');
const adminLogin =require('./src/routes/Admin/adminLogin');
const adminLoginUpdate =require('./src/routes/Admin/adminLoginUpdate');
const adminLogOut =require('./src/routes/Admin/adminLogout');

app.use('/admin',adminget);
app.use('/admin',adminPost);
app.use('/admin',adminUpdate);
app.use('/admin',adminDelete);
app.use('/admin',adminById);
app.use('/admin',adminLoginCreate);
app.use('/admin',adminLogin);
app.use('/admin',adminLoginUpdate);
app.use('/admin',adminLogOut);

//user Routes:
const userPost=require('./src/routes/Users/userRegistration');
const allUser=require('./src/routes/Users/allUserList');
const singleUser=require('./src/routes/Users/singleUserGet');
const singleUserUpdate=require('./src/routes/Users/updateUser');
const userDelete=require('./src/routes/Users/userDeleteById');
const userLogin =require('./src/routes/Users/userLogin');
const userLogout =require('./src/routes/Users/userLogout');

app.use('/user',userPost);
app.use('/user',allUser);
app.use('/user',singleUser);
app.use('/user',singleUserUpdate);
app.use('/user',userDelete);
app.use('/user',userLogin);
app.use('/user',userLogout);

//products Routes:
const addProduct=require('./src/routes/Products/addProduct');
const getProductList=require('./src/routes/Products/getProductList');
const getProductById=require('./src/routes/Products/getProductById');
const updateProductById=require('./src/routes/Products/updateProductById');

app.use('/product',addProduct);
app.use('/product',getProductList);
app.use('/product',getProductById);
app.use('/product',updateProductById);





















app.listen(config.PORT,()=>console.log(`App connected at ${config.PORT}`));