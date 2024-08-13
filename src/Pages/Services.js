import { Link } from 'react-router-dom';
import artisans from '../myData';
import BackgroundImgPhone from '../assets/img/BackgroundImgPhone.jpg';
import Footer from '../Component/Footer';
import pngTriangle from '../assets/img/pngTriangle.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const Services = () => {

  const Services = artisans.filter ( artisans =>
    artisans.category === "Services" ) ;

  return (  

    <main>
        <div>
          <img src={BackgroundImgPhone} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>
          <div className="row text-center" style={{ marginTop: "-100px" }}>
            <div className="col col-12" style={{ position: "relative" , zIndex: "1" , background: "#f1f8fc" , width: "80vw" , height:"700px" , paddingLeft: "5vw" , paddingTop: "100px" , color: "#00497c" , display: "flex" , flexDirection: "column" }}> 
              <Link className="menu__item" style={{ paddingTop: "50px" , paddingBottom: "50px" , fontSize: "4vw" }}  to="/Bâtiment">Bâtiment</Link>    
              <Link className="menu__item" style={{ paddingTop: "30px" , paddingBottom: "50px" , fontSize: "4vw" }} to="/Fabrication">Fabrication</Link> 
              <Link className="menu__item" style={{ paddingTop: "30px" , paddingBottom: "50px" , fontSize: "4vw" }} to="/Alimentation">Alimentation</Link>
              <Link className="menu__item--is-open" style={{ paddingTop: "30px" , paddingBottom: "50px" , fontSize: "4vw" }}  to="/Services">Services</Link>
            </div>     
            <div className="col col-12" style={{ position: "relative" , zIndex: "1" , width: "100vw" , height: "100%" , paddingBottom: "150px" , background: "white" , borderRadius: "60px" }}>
              <div className="row row-cols-md-1 g-4" style={{ marginTop: "50px", paddingLeft: "20vw" }}>
                {Services.map((artisan)=>{
                  return ( 
                    <article key={artisan.id}>
                      <Link to={`/artisans/${artisan.id}`} style={{ textDecoration: "none" }}>
                        <div style={{ background: "#cd2c2e" , color: "white" , width: "60vw" , height:"auto" , padding: "10px" }}>             
                          <h5 style={{ color: "white" , fontSize: "3.5vw", paddingTop: "10px" }}>{artisan.name}</h5>
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
                              style={{ color: "white" }}
                            />
                            <Box sx={{ ml: 2 }}></Box>
                          </Box>
                          <p style={{ color: "white" , fontSize: "3.5vw" }}>{artisan.specialty}</p>
                          <p style={{ color: "white" , fontSize: "3.5vw" }}>{artisan.location}</p>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
          <img src={pngTriangle} style={{ position: "relative" , zIndex: "2" , height: "100px" , marginTop: "-60px" , marginLeft: "40vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
          <div style={{ position: "relative" , zIndex: "-1" ,  marginTop: "-90px" }}>
            <Footer />
          </div>
        </div>
    </main>
  );
};

export default Services;