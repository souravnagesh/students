const express = require('express');
const app = express();
const cors = require('cors')
const Joi = require('joi');
const db = require('./models');
const { Students } = require('./models');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path:"./Student.csv",
    header:[
        {id:'firstName',title:'FIRSTNAME'},
        {id:'lastName',title:'LASTNAME'},
        {id:'mobile',title:'MOBILE'},
        {id:'email',title:'EMAIL'},
    ]
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

db.sequelize.sync().then((req) => {
    app.listen(5000 , ()=>{
        console.log("Listening on Port 5000")
    });
})

const convertToCsv = async () =>{
    const studentData = await Students.findAll();
    try {
        await csvWriter.writeRecords(studentData)
    } catch (error) {
        console.log(error);
    }
}

async function validateFirstName(firstName) {
    try {
      const existingStudent = await Students.findOne({
        where: {   firstName  }
      });
      if (existingStudent) {
       
        if (existingStudent.firstName === firstName) {
          return { firstName: true};
        } 
      }
      return { firstName: false};
    } catch (error) {
      console.log(error);
    }
  } 

  async function validateEmail(email) {
    try {
      const existingStudent = await Students.findOne({
        where: {   email }
      });
      if (existingStudent) {
       
        if (existingStudent.email === email) {
          return { email: true};
        } 
      }
      return { email: false};
    } catch (err) {
      console.log(err);
    }
  } 



const studentSchema = Joi.object({
    firstName:Joi.string().min(3).max(12).required(),
    lastName:Joi.string().min(3).max(12),
    mobile:Joi.number(),
    email:Joi.string().email()
});

app.get('/students' ,(req,res) => {
    Students.findAll()
    .then((students) => {
        res.status(200).send(students);
    })
    .catch((err) => {
        console.log(err)
    })
    convertToCsv()
})

app.get('/students/:id' , (req,res) => {
    const {id} = req.params;
    Students.findAll({ where: { id }})
    .then((student) => {
        console.log(student.firstName)
           res.status(200).send(student);
    })
    .catch(err => {
        console.log(err)
    })    
})

app.post('/students' , async (req,res) => {
    const { error , value } = studentSchema.validate(req.body , {abortEarly:false});
    if(error)
    {
        console.log(error.details);
        return res.status(404).send(error.details[0].message)
    }

    const { firstName, email } = req.body;

    const studentDataExists = await  validateFirstName(firstName);
    if (studentDataExists.firstName) {
        return res.status(404).send('First name already exists' );
    } 
    
    const checkEmail = await validateEmail(req.body.email);
    if (checkEmail.email) {
      return res.status(404).send( 'email already exists' );
    }  

    Students.create({
        firstName: value.firstName,
        lastName:value.lastName,
        mobile:value.mobile,
        email:value.email
        })
        .then((newStudent) => {
            res.status(200).send(newStudent)
        })
        .catch(err => {
            if(err){
                console.log(err)
            }
        })      
})

app.put('/students/:id/edit' , async (req,res) => {
    const {id} = req.params;
    const { error , value } = studentSchema.validate(req.body , {abortEarly:false});
    if(error)
    {
        console.log(error.details);
        return res.status(404).send(error.details[0].message)
    }

    const { firstName, email } = req.body;

    // const studentDataExists = await  validateFirstName(firstName);
    // if (studentDataExists.firstName) {
    //     return res.status(404).send('First name already exists' );
    // } 

    // const checkEmail = await validateEmail(req.body.email);
    // if (checkEmail.email) {
    //   return res.status(404).send( 'email already exists');
    // } 

    Students.update({
        firstName : value.firstName,
        lastName : value.lastName,
        mobile : value.mobile,
        email : value.email
    }, {where : {id}})
    .then((updatedStudent) => {
        res.status(200).send("updated Successfully")
    })
    .catch(err => {
        console.log(err)
    })
})

app.delete('/students/:id/delete' , (req,res) => {
    const {id} = req.params;
    Students.destroy({where : { id }})
    .then((deletedStudent) => {
        res.status(200).send(`${deletedStudent} Student record is deleted `)
    })
    .catch(err => {
        console.log(err)
    })
})

