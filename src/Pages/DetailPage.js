import React, { useState } from 'react';
import { Link , useParams } from 'react-router-dom';
import artisans from '../myData';
import BackgroundImgPhone from '../assets/img/BackgroundImgPhone.jpg';
import Footer from '../Component/Footer';
import pngTriangle from '../assets/img/pngTriangle.png';
import back from '../assets/img/back.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import MediaQuery from 'react-responsive';
import BackgroundImgTablette from '../assets/img/BackgroundImgTablette.jpg';
import BackgroundImg from '../assets/img/BackgroundImg.jpg';


const DetailPage = () => {

  const { artisanId } = useParams ( ) ;

  const artisan = artisans.find ( ( artisan ) => artisan.id === parseInt ( artisanId ) ) ;

  const [ status , setStatus ] = useState ( "Submit" ) ;

  const handleSubmit = async (e) => {
    e.preventDefault ( ) ;
    setStatus ( "Sending..." ) ;

    const { name , email , message , recipient } = e.target.elements ;

    let details = {
      name : name.value ,
      email : email.value ,
      message : message.value ,
      recipient : recipient.value ,
    } ;

    let response = await fetch ( "https://trouve-ton-artisan-mocha.vercel.app/DetailPage" , {
      method : "POST" ,
      headers : {
        "Content-Type" : "application/json;charset=utf-8" ,
      },
      body : JSON.stringify ( details ) ,
    } ) ;

    setStatus ( "Submit" ) ;

    let result = await response.json ( ) ;

    alert ( result.status ) ;

    e.target.reset ( ) ;

  } ;
  
  return (
    
    <main>
      <MediaQuery maxWidth={575}>
        <img src={BackgroundImgPhone} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>     
        <div style={{  position: "relative" , zIndex: "1" , width: "100vw" , height: "1500px" , marginTop: "-100px" , background: "white" , paddingTop: "100px" , paddingRight: "7vw" , paddingLeft: "7vw" , borderRadius: "60px" }}>
          <Link to={`/${artisan.category}`}><img src={back} style={{ width: "4vw" }} alt="backImg"></img></Link>  
          <h2 style={{ paddingTop: "10px", paddingBottom: "10px" , marginTop: "1vh" , fontSize: "5vw" }}>{artisan.name}</h2>   
          <Box 
            sx={{
              '& > legend': { mt: 2 },                  
            }}
          >
            <Rating
              name="text-feedback"
              value={artisan.note}
              readOnly
              precision={0.1}
              style={{ color: "black" }}
            />
            <Box sx={{ ml: 2 }}></Box>
          </Box>
          <h5 style={{ paddingTop: "10px" , fontSize: "4.5vw" }}>{artisan.specialty}</h5>
          <h5 style={{ paddingTop: "10px" , fontSize: "4vw" }}>{artisan.location}</h5>
          <p style={{ paddingTop: "10px" , fontSize: "4vw" }}>{artisan.about}</p>
          <p style={{ paddingTop: "10px" , fontSize: "4vw" }}>{artisan.website}</p>
        </div>
        <div style={{ position: "relative" , zIndex: "1" , background: "#f1f8fc" ,  width: "95vw" , height: "800px" , marginTop:"-900px" , paddingLeft: "10vw" , paddingTop: "100px" , paddingRight: "10vw" , paddingBotom: "100px" }}>
          <h2 style={{ color: "#00497c", fontSize: "4.5vw" , paddingBotom: "100px" }}>Envoie un message à ton artisan :</h2>
          <form onSubmit={handleSubmit} style={{ fontSize: "4vw" , paddingTop: "50px" }}>  
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="form-control" rows="1" required placeholder="name" autoComplete="given-name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control" rows="1" required placeholder="name@example.com" autoComplete="off"  />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message:</label>
              <textarea id="message" className="form-control" rows="5" required placeholder="message" />
            </div>
            <div className="col-auto" >
              <label htmlFor="recipient" className="visually-hidden">Email</label>
              <input type="text" readOnly className="form-control-plaintext" id="recipient" defaultValue={artisan.email}></input>
            </div>
            <button className="btn btn-secondary" style={{ fontSize: "4.5vw", backgroundColor:"#00497c" , marginTop:"20px" }} type="submit">{status}</button>
          </form>
        </div>   
        <img src={pngTriangle} style={{ position: "relative" , zIndex: "2" , height: "110px" , marginTop: "40px" , marginLeft: "30vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
        <div style={{ position: "relative" , zIndex: "-1" ,  marginTop: "-120px" }}>
          <Footer />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={576} maxWidth={767}>
        <img src={BackgroundImgPhone} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>     
        <div className="container center" style={{  position: "relative" , zIndex: "1" , width: "80vw" , height: "1500px" , marginTop: "-300px" , background: "white" , paddingTop: "100px" , paddingRight: "7vw" , paddingLeft: "7vw" , borderRadius: "60px" }}>
          <Link to={`/${artisan.category}`}><img src={back} style={{ width: "3vw" }} alt="backImg"></img></Link>  
          <h2 style={{ paddingTop: "10px", paddingBottom: "10px" , marginTop: "1vh" , fontSize: "3vw" }}>{artisan.name}</h2>   
          <Box 
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Rating
              name="text-feedback"
              value={artisan.note}
              readOnly
              precision={0.1}
              style={{ color: "black" }}
            />
            <Box sx={{ ml: 2 }}></Box>
          </Box>
          <h5 style={{ paddingTop: "10px" , fontSize: "2.5vw" }}>{artisan.specialty}</h5>
          <h5 style={{ paddingTop: "10px" , fontSize: "2vw" }}>{artisan.location}</h5>
          <p style={{ paddingTop: "10px" , fontSize: "2vw" }}>{artisan.about}</p>
          <p style={{ paddingTop: "10px" , fontSize: "2vw" }}>{artisan.website}</p>
        </div>
        <div style={{ position: "relative" , zIndex: "1" , background: "#f1f8fc" ,  width: "95vw" , height: "800px" , marginTop:"-900px" , paddingLeft: "10vw" , paddingTop: "100px" , paddingRight: "10vw" , paddingBotom: "100px" }}>
          <h2 style={{ color: "#00497c", fontSize: "2.5vw" , paddingBotom: "100px" }}>Envoie un message à ton artisan :</h2>
          <form onSubmit={handleSubmit} style={{ fontSize: "2vw" , paddingTop: "50px" }}>  
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="form-control" rows="1" required placeholder="name" autoComplete="given-name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control" rows="1" required placeholder="name@example.com" autoComplete="off"  />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message:</label>
              <textarea id="message" className="form-control" rows="5" required placeholder="message" />
            </div>
            <div className="col-auto" >
              <label htmlFor="recipient" className="visually-hidden">Email</label>
              <input type="text" readOnly className="form-control-plaintext" id="recipient" defaultValue={artisan.email}></input>
            </div>
            <button className="btn btn-secondary" style={{ backgroundColor:"#00497c" , marginTop:"20px" }} type="submit">{status}</button>
          </form>
        </div>   
        <img src={pngTriangle} style={{ position: "relative" , zIndex: "2" , height: "110px" , marginTop: "40px" , marginLeft: "30vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
        <div style={{ position: "relative" , zIndex: "-1" ,  marginTop: "-120px" }}>
          <Footer />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={768} maxWidth={991}>
        <img src={BackgroundImgTablette} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>     
        <div className="container center" style={{  position: "relative" , zIndex: "1" , width: "80vw" , height: "1500px" , marginTop: "-250px" , background: "white" , paddingTop: "100px" , paddingRight: "7vw" , paddingLeft: "7vw" , borderRadius: "60px" }}>
          <Link to={`/${artisan.category}`}><img src={back} style={{ width: "3vw" }} alt="backImg"></img></Link>  
          <h2 style={{ paddingTop: "10px", paddingBottom: "10px" , marginTop: "1vh" , fontSize: "3vw" }}>{artisan.name}</h2>   
          <Box 
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Rating
              name="text-feedback"
              value={artisan.note}
              readOnly
              precision={0.1}
              style={{ color: "black" }}
            />
            <Box sx={{ ml: 2 }}></Box>
          </Box>
          <h5 style={{ paddingTop: "10px" , fontSize: "2.5vw" }}>{artisan.specialty}</h5>
          <h5 style={{ paddingTop: "10px" , fontSize: "2vw" }}>{artisan.location}</h5>
          <p style={{ paddingTop: "10px" , fontSize: "2vw" }}>{artisan.about}</p>
          <p style={{ paddingTop: "10px" , fontSize: "2vw" }}>{artisan.website}</p>
        </div> 
        <div style={{ position: "relative" , zIndex: "1" , background: "#f1f8fc" ,  width: "95vw" , height: "800px" , marginTop:"-900px" , paddingLeft: "10vw" , paddingTop: "100px" , paddingRight: "10vw" , paddingBotom: "100px" }}>
          <h2 style={{ color: "#00497c", fontSize: "2.5vw", paddingBotom: "100px" }}>Envoie un message à ton artisan :</h2>
          <form onSubmit={handleSubmit} style={{ fontSize: "2vw" , paddingTop: "50px" }}>  
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="form-control" rows="1" required placeholder="name" autoComplete="given-name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control" rows="1" required placeholder="name@example.com" autoComplete="off"  />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message:</label>
              <textarea id="message" className="form-control" rows="5" required placeholder="message" />
            </div>
            <div className="col-auto" >
              <label htmlFor="recipient" className="visually-hidden">Email</label>
              <input type="text" readOnly className="form-control-plaintext" id="recipient" defaultValue={artisan.email}></input>
            </div>
            <button className="btn btn-secondary" style={{ backgroundColor:"#00497c" , marginTop:"20px" }} type="submit">{status}</button>
          </form>
        </div>   
        <img src={pngTriangle} style={{ position: "relative" , zIndex: "2" , height: "110px" , marginTop: "40px" , marginLeft: "30vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
        <div style={{ position: "relative" , zIndex: "-1" ,  marginTop: "-120px" }}>
          <Footer />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={992} maxWidth={1399}>
        <img src={BackgroundImg} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>     
        <div className="container center" style={{  position: "relative" , zIndex: "1" , width: "80vw" , height: "1500px" , marginTop: "-250px" , background: "white" , paddingTop: "100px" , paddingRight: "7vw" , paddingLeft: "7vw" , borderRadius: "60px" }}>
          <Link to={`/${artisan.category}`}><img src={back} style={{ width: "2.5vw" }} alt="backImg"></img></Link>  
          <h2 style={{ paddingTop: "10px" , paddingBottom: "10px" , marginTop:"1vh" , fontSize: "2.5vw" }}>{artisan.name}</h2>   
          <Box 
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Rating
              name="text-feedback"
              value={artisan.note}
              readOnly
              precision={0.1}
              style={{ color: "black" }}
            />
            <Box sx={{ ml: 2 }}></Box>
          </Box>
          <h5 style={{ paddingTop: "10px" , fontSize: "2vw" }}>{artisan.specialty}</h5>
          <h5 style={{ paddingTop: "10px" , fontSize: "1.5vw" }}>{artisan.location}</h5>
          <p style={{ paddingTop: "10px" , fontSize: "1.5vw" }}>{artisan.about}</p>
          <p style={{ paddingTop: "10px" , fontSize: "1.5vw" }}>{artisan.website}</p>
        </div>
        <div style={{ position: "relative" , zIndex: "1" , background: "#f1f8fc" ,  width: "95vw" , height: "800px" , marginTop:"-900px" , paddingLeft: "10vw" , paddingTop: "100px" , paddingRight: "10vw" , paddingBotom: "100px" }}>
          <h2 style={{ color: "#00497c", fontSize: "2vw", paddingBotom: "100px" }}>Envoie un message à ton artisan :</h2>
          <form onSubmit={handleSubmit} style={{ fontSize: "1.5vw" , paddingTop: "50px" }}>  
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="form-control" rows="1" required placeholder="name" autoComplete="given-name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control" rows="1" required placeholder="name@example.com" autoComplete="off"  />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message:</label>
              <textarea id="message" className="form-control" rows="5" required placeholder="message" />
            </div>
            <div className="col-auto" >
              <label htmlFor="recipient" className="visually-hidden">Email</label>
              <input type="text" readOnly className="form-control-plaintext" id="recipient" defaultValue={artisan.email}></input>
            </div>
            <button className="btn btn-secondary" style={{ backgroundColor: "#00497c" , marginTop:"20px" }} type="submit">{status}</button>
          </form>
        </div>   
        <img src={pngTriangle} style={{ position: "relative" , zIndex: "2" , height: "110px" , marginTop: "40px" , marginLeft: "30vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
        <div style={{ position: "relative" , zIndex: "-1" ,  marginTop: "-120px" }}>
          <Footer />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1400}>
        <img src={BackgroundImg} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>     
        <div className="container center" style={{  position: "relative" , zIndex: "1" , width: "80vw" , height: "1500px" , marginTop: "-250px" , background: "white" , paddingTop: "100px" , paddingRight: "7vw" , paddingLeft: "7vw" , borderRadius: "60px" }}>
          <Link to={`/${artisan.category}`}><img src={back} style={{ width: "2vw" }} alt="backImg"></img></Link>  
          <h2 style={{ paddingTop: "10px" , paddingBottom: "10px" , marginTop: "1vh" , fontSize: "2vw" }}>{artisan.name}</h2>   
          <Box 
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Rating
              name="text-feedback"
              value={artisan.note}
              readOnly
              precision={0.1}
              style={{ color: "black" }}
            />
            <Box sx={{ ml: 2 }}></Box>
          </Box>
          <h5 style={{ paddingTop: "10px" , fontSize: "1.5vw" }}>{artisan.specialty}</h5>
          <h5 style={{ paddingTop: "10px" , fontSize: "1.2vw" }}>{artisan.location}</h5>
          <p style={{ paddingTop: "10px" , fontSize: "1.2vw" }}>{artisan.about}</p>
          <p style={{ paddingTop: "10px" , fontSize: "1.2vw" }}>{artisan.website}</p>
        </div>
        <div style={{ position: "relative" , zIndex: "1" , background: "#f1f8fc" , width: "95vw" , height: "800px" , marginTop:"-900px" , paddingLeft: "10vw" , paddingTop: "100px" , paddingRight: "10vw" , paddingBotom: "100px" }}>
          <h2 style={{ color: "#00497c", fontSize: "1.5vw", paddingBotom: "100px" }}>Envoie un message à ton artisan :</h2>
          <form onSubmit={handleSubmit} style={{ fontSize: "1.2vw" , paddingTop: "50px" }}>  
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="form-control" required placeholder="name" autoComplete="given-name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control" required placeholder="name@example.com" autoComplete="off"  />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message:</label>
              <textarea id="message" className="form-control" rows="5" required placeholder="message" />
            </div>
            <div className="col-auto" >
              <label htmlFor="recipient" className="visually-hidden">Email</label>
              <input type="text" readOnly className="form-control-plaintext" id="recipient" defaultValue={artisan.email}></input>
            </div>
            <button className="btn btn-secondary" style={{ backgroundColor:"#00497c" , marginTop:"20px" }} type="submit">{status}</button>
          </form>
        </div>   
        <img src={pngTriangle} style={{ position: "relative" , zIndex: "2" , height: "110px" , marginTop: "40px" , marginLeft: "30vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
        <div style={{ position: "relative" , zIndex: "-1" ,  marginTop: "-120px" }}>
          <Footer />
        </div>
      </MediaQuery>
    </main>
  );
};


export default DetailPage;
