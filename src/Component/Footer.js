import { Link } from 'react-router-dom';
import logo2 from '../assets/img/Logo2.png';
import position from '../assets/img/position.png';
import phone from '../assets/img/phone.png';
import MediaQuery from 'react-responsive';



export const Footer = () => {

  return (

    <footer>
      <MediaQuery maxWidth={575}>
        <div style={{ width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , paddingTop: "100px" }}> 
          <div className="row" style={{ width: "100vw" }} >
            <div className="col col-12"  >
              <img src={logo2} className="col col-11" style={{ paddingLeft: "0vw" }} alt="logo"></img>
            </div>  
            <div className="col col-12" style={{  paddingLeft: "15vw" }}>
              <p className="footer__item" style={{ color: "#ffffff", fontSize: "5vw" }}>Lyon</p>
              <img src={position} style={{ height: "10vw" , float: "left" , marginBottom: "70px" , paddingRight: "1vw" }} alt="position"></img>
              <p className="footer__item" style={{ color: "#ffffff" , fontSize: "5vw" }}>
                101 cours Charlemagne <br/>
                CS 20033 <br/>
                69269 LYON CEDEX 02<br/>
                France<br/>
              </p>
              <img src={phone} style={{ height: "10vw" , float: "left" , marginBottom: "70px" , paddingRight: "1vw" }} alt="phone"></img>
              <p className="footer__item" style={{ color: "#ffffff" , fontSize: "5vw"  }}>+33 (0)4 26 73 40 00</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection:"column" , width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , position: "absolute" ,  zIndex: "4" , paddingBottom: "20px" , boxShadow: "0px -1px #ffffff" , paddingTop: "10px" }}>  
            <Link className="footer__item" style={{ fontSize: "4vw" , color:"#ffffff" , textDecoration: "none" , paddingLeft: "5vw" , paddingBottom: "20px" }} to="/*">Mentions Légales</Link>
            <Link className="footer__item" style={{ fontSize: "4vw" , color:"#ffffff" , textDecoration: "none" , paddingLeft: "5vw" , paddingBottom: "20px" }} to="/*">Données personelles</Link> 
            <Link className="footer__item" style={{ fontSize: "4vw" , color:"#ffffff" , textDecoration: "none" , paddingLeft: "5vw" , paddingBottom: "20px" }} to="/*">Accessibilité</Link> 
            <Link className="footer__item" style={{ fontSize: "4vw" , color:"#ffffff" , textDecoration: "none" , paddingLeft: "5vw" , paddingBottom: "20px" }} to="/*">Gestion de cookies</Link>  
          </div>
        </div>   
      </MediaQuery>

      <MediaQuery minWidth={576} maxWidth={767}>
        <div style={{ width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , paddingTop: "100px" }}> 
          <div className="row" style={{ width: "100vw" }} >
            <div className="col">
              <img src={logo2} className="col col-12" style={{ paddingLeft: "1vw" }} alt="logo"></img>
            </div>  
            <div className="col" >
              <p className="footer__item" style={{ color: "#ffffff" }}>Lyon</p>
              <img src={position} style={{ height: "2vw" , float: "left" , marginBottom: "70px" , paddingRight: "1vw" }} alt="position"></img>
              <p className="footer__item" style={{ color: "#ffffff" }}>
                101 cours Charlemagne <br/>
                CS 20033 <br/>
                69269 LYON CEDEX 02<br/>
                France<br/>
              </p>
              <img src={phone} style={{ height: "2vw" , float: "left" , marginBottom: "70px" , paddingRight: "1vw" }} alt="phone"></img>
              <p className="footer__item" style={{ color: "#ffffff" }}>+33 (0)4 26 73 40 00</p>
            </div>
          </div>
          <div className="text-center" style={{  width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , position: "absolute" ,  zIndex: "4" , paddingBottom: "10px" , boxShadow: "0px -1px #ffffff" , paddingTop: "10px" }}>  
            <Link className="footer__item" style={{ fontSize: "2vw" , color:"#ffffff" , textDecoration: "none" , paddingRight: "3vw" , paddingLeft: "3vw" }} to="/*">Mentions Légales</Link>
            <Link className="footer__item" style={{ fontSize: "2vw" , color:"#ffffff" , textDecoration: "none" , paddingRight: "3vw" , paddingLeft: "3vw" }} to="/*">Données personelles</Link> 
            <Link className="footer__item" style={{ fontSize: "2vw" , color:"#ffffff" , textDecoration: "none" , paddingRight: "3vw" , paddingLeft: "3vw" }} to="/*">Accessibilité</Link> 
            <Link className="footer__item" style={{ fontSize: "2vw" , color:"#ffffff" , textDecoration: "none" , paddingRight: "3vw" , paddingLeft: "3vw" }} to="/*">Gestion de cookies</Link>  
          </div>
        </div>   
      </MediaQuery>

      <MediaQuery minWidth={768} maxWidth={991}>
        <div style={{ width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , paddingTop: "100px" }}> 
          <div className="row" style={{ width: "100vw" }} >
            <div className="col">
              <img src={logo2} className="col col-11" style={{ paddingLeft: "10vw" }} alt="logo"></img>
            </div>  
            <div className="col" >
              <p className="footer__item" style={{ color: "#ffffff" }}>Lyon</p>
              <img src={position} style={{ height: "2vw" , float: "left" , marginBottom: "70px" , paddingRight: "1vw" }} alt="position"></img>
              <p className="footer__item" style={{ color: "#ffffff" }}>
                101 cours Charlemagne <br/>
                CS 20033 <br/>
                69269 LYON CEDEX 02<br/>
                France<br/>
              </p>
              <img src={phone} style={{ height: "2vw" , float: "left" , marginBottom: "70px" , paddingnRight: "1vw" }} alt="phone"></img>
              <p className="footer__item" style={{ color: "#ffffff" }}>+33 (0)4 26 73 40 00</p>
            </div>
          </div>
          <div className="text-center" style={{ fontSize: "2vw" ,  width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , position: "absolute" ,  zIndex: "4" , paddingBottom: "10px" , boxShadow: "0px -1px #ffffff" , paddingTop: "10px" }}>  
            <Link className="footer__item" style={{ fontSize: "1.5vw" , color:"#ffffff" , textDecoration: "none" , paddingRight: "3vw" , paddingLeft: "3vw" }} to="/*">Mentions Légales</Link>
            <Link className="footer__item" style={{ fontSize: "1.5vw" , color:"#ffffff" , textDecoration: "none" , paddingRight: "3vw" , paddingLeft: "3vw" }} to="/*">Données personelles</Link> 
            <Link className="footer__item" style={{ fontSize: "1.5vw" , color:"#ffffff" , textDecoration: "none" , paddingRight: "3vw" , paddingLeft: "3vw" }} to="/*">Accessibilité</Link> 
            <Link className="footer__item" style={{ fontSize: "1.5vw" , color:"#ffffff" , textDecoration: "none" , paddingRight: "3vw" , paddingLeft: "3vw" }} to="/*">Gestion de cookies</Link>  
          </div>
        </div>   
      </MediaQuery>

      <MediaQuery minWidth={992} maxWidth={1399}>
        <div style={{ width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , paddingTop: "100px" }}> 
          <div className="row" style={{ width: "100vw" }}>
            <div className="col">
              <img src={logo2} className="col col-9" style={{ marginLeft: "10vw" }} alt="logo"></img>
            </div>  
            <div className="col" >
              <p className="footer__item" style={{ color: "#ffffff" }}>Lyon</p>
              <img src={position} style={{ height: "2vw" , float: "left" , marginBottom: "80px" , marginRight: "1vw" }} alt="position"></img>
              <p className="footer__item" style={{ fontSize: "2vw" , color: "#ffffff" }}>
                101 cours Charlemagne <br/>
                CS 20033 <br/>
                69269 LYON CEDEX 02<br/>
                France<br/>
              </p>
              <img src={phone} style={{ height: "2vw" , float: "left" , marginBottom: "70px" , marginRight: "1vw" }} alt="phone"></img>
              <p className="footer__item" style={{ fontSize: "2vw" , color: "#ffffff" }}>+33 (0)4 26 73 40 00</p>
            </div>
          </div>
          <div className="text-center" style={{ width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , position:"absolute" ,  zIndex: '4' , paddingBottom: "10px" , boxShadow: "0px -1px #ffffff" , paddingTop: "10px" }}>  
            <Link className="footer__item" style={{ fontSize: "2vw" , color:"#ffffff" , textDecoration: "none" , marginRight: "3vw" , marginLeft: "3vw" }} to="/*">Mentions Légales</Link>
            <Link className="footer__item" style={{ fontSize: "2vw" , color:"#ffffff" , textDecoration: "none" , marginRight: "3vw" , marginLeft: "3vw" }} to="/*">Données personelles</Link> 
            <Link className="footer__item" style={{ fontSize: "2vw" , color:"#ffffff" , textDecoration: "none" , marginRight: "3vw" , marginLeft: "3vw" }} to="/*">Accessibilité</Link> 
            <Link className="footer__item" style={{ fontSize: "2vw" , color:"#ffffff" , textDecoration: "none" , marginRight: "3vw" , marginLeft: "3vw" }} to="/*">Gestion de cookies</Link>  
          </div>
        </div>   
      </MediaQuery>

      <MediaQuery minWidth={1400}>
        <div style={{ width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , paddingTop: "100px" }}> 
          <div className="row" style={{ width: "100vw" }}>
            <div className="col">
              <img src={logo2} className="col col-8" style={{ marginLeft: "10vw" }} alt="logo"></img>
            </div>  
            <div className="col" >
              <p className="footer__item" style={{ fontSize: "1.2vw" , color: "#ffffff" }}>Lyon</p>
              <img src={position} style={{ height: "1.5vw" , float: "left" , marginBottom: "70px" , marginRight: "1vw" }} alt="position"></img>
              <p className="footer__item" style={{ fontSize: "1.2vw" , color: "#ffffff" }}>
                101 cours Charlemagne <br/>
                CS 20033 <br/>
                69269 LYON CEDEX 02<br/>
                France<br/>
              </p>
              <img src={phone} style={{ height: "1.5vw" , float: "left" , marginBottom: "70px" , marginRight: "1vw" }} alt="phone"></img>
              <p className="footer__item" style={{ fontSize: "1.2vw" , color: "#ffffff" }}>+33 (0)4 26 73 40 00</p>
            </div>
          </div>
          <div className="text-center" style={{  width: "100vw" , backgroundColor: "#0074c7" , color: "#ffffff" , position: "absolute" ,  zIndex: "4" , paddingBottom: "10px" , boxShadow: "0px -1px #ffffff" , paddingTop: "10px" }}>  
            <Link className="footer__item" style={{ fontSize: "1.2vw" , color:"#ffffff" , textDecoration: "none" , marginRight: "3vw" , marginLeft: "3vw" }} to="/*">Mentions Légales</Link>
            <Link className="footer__item" style={{ fontSize: "1.2vw" , color:"#ffffff" , textDecoration: "none" , marginRight: "3vw" , marginLeft: "3vw" }} to="/*">Données personelles</Link> 
            <Link className="footer__item" style={{ fontSize: "1.2vw" , color:"#ffffff" , textDecoration: "none" , marginRight: "3vw" , marginLeft: "3vw" }} to="/*">Accessibilité</Link> 
            <Link className="footer__item" style={{ fontSize: "1.2vw" , color:"#ffffff" , textDecoration: "none" , marginRight: "3vw" , marginLeft: "3vw" }} to="/*">Gestion de cookies</Link>  
          </div>
        </div>   
      </MediaQuery>

    </footer>
  );
};

export default Footer;


