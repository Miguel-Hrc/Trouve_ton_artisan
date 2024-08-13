import React, { useState } from 'react';
import { Link , useParams } from 'react-router-dom';
import artisans from '../myData';
import BackgroundImgPhone from '../assets/img/BackgroundImgPhone.jpg';
import Footer from '../Component/Footer';
import pngTriangle from '../assets/img/pngTriangle.png';
import back from '../assets/img/back.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



const DetailPage = () => {

  const { artisanId } = useParams ( ) ;

  const artisan = artisans.find ( ( artisan ) => artisan.id === parseInt ( artisanId ) ) ;
  
  return (
    
    <main>
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
          <form style={{ fontSize: "4vw" , paddingTop: "50px" }}>  
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
            <button className="btn btn-secondary" style={{ fontSize: "4.5vw", backgroundColor:"#00497c" , marginTop:"20px" }} type="submit">Submit</button>
          </form>
        </div>   
        <img src={pngTriangle} style={{ position: "relative" , zIndex: "2" , height: "110px" , marginTop: "40px" , marginLeft: "30vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
        <div style={{ position: "relative" , zIndex: "-1" ,  marginTop: "-120px" }}>
          <Footer />
        </div>
    </main>
  );
};


export default DetailPage;
