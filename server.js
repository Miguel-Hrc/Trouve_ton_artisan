
const express = require ( "express" ) ;

const router = express.Router ( ) ;

const cors = require ( "cors" ) ;

const nodemailer = require ( "nodemailer" ) ;


const app = express() ;

app.use ( cors( ) ) ;

app.use ( express.json ( ) ) ;

app.use ( "/" , router ) ;

app.listen ( 3000 , ( ) => console.log ( "Server Running" ) ) ;


const contactEmail = nodemailer.createTransport ( {
    host: "sandbox.smtp.mailtrap.io" ,
    auth: {  
      user: "ce941b2aca0905" ,
      pass: "2d0bde8590f43d" ,
    } ,
} ) ;

contactEmail.verify ( ( error ) => {
  if ( error ) {
    console.log ( error ) ;
  } else {
    console.log ( "Ready to Send" ) ;
  }
} ) ;
  

router.post ( "/DetailPage" , ( req , res ) => {
  const name = req.body.name ;
  const email = req.body.email ;
  const message = req.body.message ; 
  const recipient = req.body.recipient ;
  const mail = {
    from: name ,
    to: `${recipient}` ,
    subject: "Contact Form Submission" ,
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>` ,
  };

  contactEmail.sendMail ( mail, ( error ) => {
    if ( error ) {
      res.json ( { status: "ERROR" } ) ;
    } else {
      res.json ( { status: "Message Sent" } ) ;
    }
  } ) ;
} ) ;  
