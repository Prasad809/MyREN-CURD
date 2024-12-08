const mysql=require('mysql')
const express=require('express')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())

let db=mysql.createConnection({
    user:'root',
    password:'Admin',
    host:'localhost',
    database:'Company'
})
//creating DataBase
// db.connect((err)=>{
//     if(err) throw err;
//     db.query('create database Company')
//     console.log("DataBase Created");
// })
// db.connect((err)=>{
//     if(err) throw err;
//     db.query('create table employees(id int auto_increment primary key,name varchar(20),email varchar(30),password varchar(15))');
//     console.log("table Created");
// })
app.post('/employees',(req,res)=>{
    let {name,email,password}=req.body
    let query=`insert into employees(name,email,password) values (?,?,?)`
    db.query(query,[name,email,password],(err,result)=>{
        if(err) throw err;
        res.json({id:result,name,email,password})
    })
})
app.post('/login',(req,res)=>{
    let {email,password}=req.body;
    let query=`select * from employees where email = ? and password = ?`
    db.query(query,[email,password],(err,result)=>{
        if(err) return res.json({message:'Error inside Server'});
        if(result){
            if(result.length >0){
                return res.json({LogIn:true})
            }else{
                return res.json({LogIn:false})
            }
        }else{
            return res.json({newerr:true})
        }
    })
})
app.delete('/employees/:id',(req,res)=>{
    db.query(`delete from employees where id=${req.params.id}`,(err,result)=>{
        if(err) throw err;
       res.json(result)
    })
})
app.get('/employees',(req,res)=>{
    db.query('select * from employees',(err,result)=>{
        if(err) throw err;
        res.json(result)
    })
})
app.listen(8081,(err)=>{
    if(err) throw err;
    console.log("Server Running On 8081");
})