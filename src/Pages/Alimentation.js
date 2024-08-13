import { Link } from 'react-router-dom';
import artisans from '../myData';
import BackgroundImgPhone from '../assets/img/BackgroundImgPhone.jpg';
import Footer from '../Component/Footer';
import pngTriangle from '../assets/img/pngTriangle.png';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import MediaQuery from 'react-responsive';
import BackgroundImgTablette from '../assets/img/BackgroundImgTablette.jpg';
import BackgroundImg from '../assets/img/BackgroundImg.jpg';

const Alimentation = () => {

  const Alimentation = artisans.filter ( artisans =>
    artisans.category === "Alimentation" ) ;

  return (  

    <main>

      <MediaQuery maxWidth={575}>
        <div>
          <img src={BackgroundImgPhone} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>
          <div className="row text-center" style={{ marginTop: "-100px" }}>
            <div className="col col-12" style={{ position: "relative" , zIndex: "1" , background: "#f1f8fc" , width: "80vw" , height:"700px" , paddingLeft: "5vw" , paddingTop: "100px" , color: "#00497c" , display: "flex" , flexDirection: "column" }}> 
              <Link className="menu__item" style={{ paddingTop: "50px" , paddingBottom: "50px" , fontSize: "4vw" }}  to="/Bâtiment">Bâtiment</Link>    
              <Link className="menu__item" style={{ paddingTop: "30px" , paddingBottom: "50px" , fontSize: "4vw" }} to="/Fabrication">Fabrication</Link> 
              <Link className="menu__item--is-open" style={{ paddingTop: "30px" , paddingBottom: "50px" , fontSize: "4vw" }} to="/Alimentation">Alimentation</Link>
              <Link className="menu__item" style={{ paddingTop: "30px" , paddingBottom: "50px" , fontSize: "4vw" }}  to="/Services">Services</Link>
            </div>     
            <div className="col col-12" style={{ position: "relative" , zIndex: "1" , width: "100vw" , height: "100%" , paddingBottom: "150px" , background: "white" , borderRadius: "60px" }}>
              <div className="row row-cols-md-1 g-4" style={{ marginTop: "50px", paddingLeft: "20vw" }}>
                {Alimentation.map((artisan)=>{
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
      </MediaQuery> 

      <MediaQuery minWidth={576} maxWidth={767}>
        <div>
          <img src={BackgroundImgPhone} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>
          <div className="row text-center" style={{ marginTop: "-300px" }}>
            <div className="col col-12" style={{ display: "flex" , flexDirection: "column" , position: "relative" , zIndex: "1" , background: "#f1f8fc" , width: "80vw" , height:"700px" , paddingLeft: "10vw", padding: "100px" , color: "#00497c" }}> 
              <Link className="menu__item" style={{ padding: "50px" ,fontSize: "2.5vw" }}  to="/Bâtiment">Bâtiment</Link>    
              <Link className="menu__item" style={{ padding: "30px" , fontSize: "2.5vw" }} to="/Fabrication">Fabrication</Link> 
              <Link className="menu__item--is-open" style={{ padding: "30px" , fontSize: "2.5vw" }} to="/Alimentation">Alimentation</Link>
              <Link className="menu__item" style={{ padding: "30px" , fontSize: "2.5vw" }}  to="/Services">Services</Link>
            </div>     
            <div className="col col-12" style={{ position: "relative" , zIndex: "1" , width: "70vw" , height: "100%" , paddingBottom: "150px" , background: "white" , borderRadius: "60px" , marginLeft: "10vw" }}>
              <div className="row row-cols-md-1 g-4" style={{ marginTop: "50px", paddingLeft: "2vw" }}>
                {Alimentation.map((artisan)=>{
                  return ( 
                    <article key={artisan.id}>
                      <Link to={`/artisans/${artisan.id}`} style={{ textDecoration: "none" }}>
                        <div style={{ background: "#cd2c2e" , color: "white" , width: "60vw" , height: "auto" , padding: "10px" }}>             
                          <h5 style={{ color: "white" , fontSize: "2vw" , paddingTop: "10px" }}>{artisan.name}</h5>
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
                          <p style={{ color: "white", fontSize: "2vw" }}>{artisan.specialty}</p>
                          <p style={{ color: "white", fontSize: "2vw" }}>{artisan.location}</p>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
          <img src={pngTriangle} style={{ position: 'relative', zIndex: '2' , height: "100px" , marginTop: "-60px" , marginLeft: "40vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
          <div style={{ position: 'relative', zIndex: '-1',  marginTop: "-90px",}}>
            <Footer />
          </div>
        </div>
      </MediaQuery> 

      <MediaQuery minWidth={768} maxWidth={991}>
        <div>
          <img src={BackgroundImgTablette} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>
          <div className="row text-center" style={{ marginTop: "-300px" }}>
            <div className="col col-12" style={{ position: "relative" , zIndex: "1" , background: "#f1f8fc" , width: "80vw" , height:"700px" , paddingLeft: "10vw" , padding: "100px" , color: "#00497c" , display: "flex" , flexDirection: "column" }}> 
              <Link className="menu__item" style={{ padding: "50px" , fontSize: "2vw" }}  to="/Bâtiment">Bâtiment</Link>    
              <Link className="menu__item" style={{ padding: "30px" , fontSize: "2vw" }} to="/Fabrication">Fabrication</Link> 
              <Link className="menu__item--is-open" style={{ padding: "30px" , fontSize: "2vw" }} to="/Alimentation">Alimentation</Link>
              <Link className="menu__item" style={{ padding: "30px" , fontSize: "2vw" }}  to="/Services">Services</Link>
            </div>     
            <div className="col col-12" style={{ position: "relative" , zIndex: "1" , width: "70vw" , height: "100%" , paddingBottom: "150px" , background: "white" , borderRadius: "60px" , marginLeft: "10vw" }}>
              <div className="row row-cols-md-1 g-4" style={{ marginTop: "50px" , paddingLeft: "2vw" }}>
                {Alimentation.map((artisan)=>{
                  return ( 
                    <article key={artisan.id}>
                      <Link to={`/artisans/${artisan.id}`} style={{ textDecoration: "none" }}>
                        <div style={{ background: "#cd2c2e" , color: "white" , width: "60vw" , height: "auto" , padding: "10px" }}>             
                          <h5 style={{ color: "white" , fontSize: "1.5vw" , paddingTop: "10px" }}>{artisan.name}</h5>
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
                          <p style={{ color: "white" , fontSize: "1.5vw" }}>{artisan.specialty}</p>
                          <p style={{ color: "white" , fontSize: "1.5vw" }}>{artisan.location}</p>
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
      </MediaQuery> 

      <MediaQuery minWidth={992} maxWidth={1399}>
        <div>
          <img src={BackgroundImg} style={{ position: "relative" , zIndex: "0" }} id="background__img" alt="BackgroundImg"></img>
          <div className="row text-center" style={{ marginTop: "-100px" }}>
            <div className="col col-6" style={{ position: "relative" , zIndex: "1" , background: "#f1f8fc" , width: "30vw" , height: "700px" , paddingLeft: "10vw" , padding: "100px" , color: "#00497c" , display: "flex" , flexDirection: "column"  }}> 
                <Link className="menu__item" style={{ padding: "50px" ,fontSize: "2vw" }}  to="/Bâtiment">Bâtiment</Link>    
                <Link className="menu__item" style={{ padding: "30px" , fontSize: "2vw" }} to="/Fabrication">Fabrication</Link> 
                <Link className="menu__item--is-open" style={{ padding: "30px" , fontSize: "2vw" }} to="/Alimentation">Alimentation</Link>
                <Link className="menu__item" style={{ padding: "30px" , fontSize: "2vw" }}  to="/Services">Services</Link>
            </div>     
            <div className="col col-6" style={{ position: "relative" , zIndex: "1" , width: "60vw" , height: "100%" , paddingBottom: "450px" , background: "white" , borderRadius: "60px" , marginLeft: "35vw" , marginTop: "-700px" }}>
              <div className="row row-cols-md-2 g-4" style={{ marginTop: "50px", paddingLeft: "2vw" }}>
                {Alimentation.map((artisan)=>{
                  return ( 
                    <article key={artisan.id}>
                      <Link to={`/artisans/${artisan.id}`} style={{ textDecoration: "none" }}>
                        <div style={{ background: "#cd2c2e" , color: "white" , width: "25vw" , height: "auto" , padding: "10px" }}>             
                          <h5 style={{ color: "white" , fontSize: "1.5vw" , paddingTop: "10px" }}>{artisan.name}</h5>
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
                          <p style={{ color: "white" , fontSize: "1.5vw" }}>{artisan.specialty}</p>
                          <p style={{ color: "white" , fontSize: "1.5vw" }}>{artisan.location}</p>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
          <img src={pngTriangle} style={{ position: "relative" , zIndex: "2" , height: "100px" , marginTop: "-60px" , marginLeft: "40vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
          <div style={{ position: "relative" , zIndex: "-1" ,  marginTop: "-90px"}}>
            <Footer />
          </div>
        </div>
      </MediaQuery> 
    
      <MediaQuery minWidth={1400}>
        <div>
          <img src={BackgroundImg} style={{ position: 'relative', zIndex: '0'}} id="background__img" alt="BackgroundImg"></img>
          <div className="row text-center" style={{ marginTop: "-250px" }}>
            <div className="col col-6" style={{ position: 'relative', zIndex: '1' , background: "#f1f8fc" , width: "30vw" , height:"700px" , paddingLeft: "10vw", padding:"100px" , color:"#00497c" ,  display: "flex" , flexDirection: "column" }}> 
                <Link className="menu__item" style={{ padding: "50px" ,fontSize: "1.5vw" }}  to="/Bâtiment">Bâtiment</Link>    
                <Link className="menu__item" style={{ padding: "30px" , fontSize: "1.5vw" }} to="/Fabrication">Fabrication</Link> 
                <Link className="menu__item--is-open" style={{ padding: "30px" , fontSize: "1.5vw" }} to="/Alimentation">Alimentation</Link>
                <Link className="menu__item" style={{ padding: "30px" , fontSize: "1.5vw" }}  to="/Services">Services</Link>
            </div>     
            <div className="col col-6" style={{ position: 'relative', zIndex: '1', width:"60vw" , height: "100%" , paddingBottom: "600px" , background: "white" , borderRadius: "60px" , marginLeft: "35vw" , marginTop: "-700px" }}>
              <div className="row row-cols-md-2 g-4" style={{ marginTop: "50px", paddingLeft: "2vw" }}>
                {Alimentation.map((artisan)=>{
                  return ( 
                    <article key={artisan.id}>
                      <Link to={`/artisans/${artisan.id}`} style={{ textDecoration: "none" }}>
                        <div style={{ background: "#cd2c2e" , color: "white" , width: "25vw" , height:"auto" , padding: "2%" }}>             
                          <h5 style={{ color: "white", fontSize: "1vw", paddingTop: "10px" }}>{artisan.name}</h5>
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
                          <p style={{ color: "white", fontSize: "1vw" }}>{artisan.specialty}</p>
                          <p style={{ color: "white", fontSize: "1vw" }}>{artisan.location}</p>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
          <img src={pngTriangle} style={{ position: 'relative', zIndex: '2' , height: "100px" , marginTop: "-60px" , marginLeft: "40vw" , transform: "rotate(90deg)" }} alt="BackgroundImg2"></img>
          <div style={{ position: 'relative', zIndex: '-1',   marginTop: "-90px" }}>
            <Footer />
          </div>
        </div>
      </MediaQuery>

    </main>
  );
};

export default Alimentation;