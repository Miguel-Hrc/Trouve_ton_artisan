import artisans from '../myData';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import BackgroundImgPhone from '../assets/img/BackgroundImgPhone.jpg';
import pngTriangle from '../assets/img/pngTriangle.png';
import Footer from '../Component/Footer';

export const Home = () => {

  const top = artisans.filter ( artisans =>
    artisans.top === true ) ;   

  return ( 

    <main>
      <img src={BackgroundImgPhone} style={{ position: "relative" , zIndex: '0'}} id="background__img" alt="BackgroundImg"></img>
        <div className="container text-center" style={{ position: "relative" , zIndex: "1" , width: "100vw" , height: "500px" , paddingBottom: "200px" , background: "white" , paddingTop: "100px" , paddingRight: "4vw" , paddingLeft: "4vw" , borderRadius: "60px" , marginTop: "-100px" }}>
          <h2  className="text-center" style={{ fontSize: "4vw" ,  paddingBottom: "100px" , color: "#00497c" }}> Comment trouver mon artisan ?</h2>
          <p className="text-start" style={{ fontSize: "3.5vw" , paddingBottom: "50px" }}>Choisissez la catégorie d’artisanat que vous souhaitez dans le menu.</p> 
          <p className="text-start" style={{ fontSize: "3.5vw" , paddingBottom: "50px" }}>Choisissez un artisan parmi les artisans selon la catégorie ou la localisation.</p>
          <p className="text-start" style={{ fontSize: "3.5vw" , paddingBottom: "50px" }}>Contactez le en remplissant le formulaire de contact.</p>
          <p className="text-start"  style={{ fontSize: "3.5vw" , paddingBottom: "50px" }}>Une réponse sera apportée sous 48h.</p>
        </div> 
        <section className="container text-center" style={{ width: "100vw" , height: "1300px" , background: "white" , paddingTop: "100px" , paddingRight: "7vw" , paddingLeft: "7vw" , borderRadius: "60px" , marginBottom: "200px" }}>   
          <div className="position-absolute start-50 translate-middle" style={{  width: "90vw" , marginTop: "500px" }}>
            <h2 style={{ fontSize: "4vw" , paddingBottom: "50px" , color: "#00497c" , paddingTop: "200px" }}>Artisans du mois :</h2>
            <div className="row grid gap-0 row-gap-5">
              {top.map((artisan)=>{
                return ( 
                  <article key={artisan.id}>
                    <Link to={`/artisans/${artisan.id}`} style={{ textDecoration: "none" }}>
                      <div className="col text-center" style={{ paddingTop: "50px" , background: "#f1f8fc" , width: "90vw" , height: "auto" , paddingBottom: "50px" }}>
                        <h5  style={{ fontSize: "3.5vw" , color: "black" }}>{artisan.name}</h5>
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
                        <p style={{ fontSize: "3.5vw" , color: "black" }}>{artisan.specialty}</p>
                        <p style={{ fontSize: "3.5vw" , color: "black" }}>{artisan.location}</p>    
                      </div>
                    </Link>     
                  </article>
                );
              })}
            </div>  
          </div>
        </section>
        <img src={pngTriangle} style={{ position: "relative" , zIndex: "2" , height: "110px" , marginTop: "-450px" , marginLeft: "30vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
        <div style={{ position: "relative" , zIndex: "-1" ,  marginTop: "-300px" }}>
          <Footer />
        </div>
    </main>
    
  );
};

export default Home;