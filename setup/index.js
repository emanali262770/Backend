

import dotenv from 'dotenv'
import connectDB from './src/db/index.js';
dotenv.config()

connectDB()



// import express from 'express';
// const app=express()
// ;(async ()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on('error',(error)=>{
//         console.log('express not working');
        
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log('app is running');
        
//       })

//     } catch (error) {
//         console.log(error);
        
//     }
// })()