import { Link, useMatch , useResolvedPath  } from 'react-router-dom';
import logo from '../assets/img/Logo.png';
import { useState, React } from 'react';
import './navbar.sass'
import artisans from '../myData';
import MediaQuery from 'react-responsive';

export const Header = ({setResultsName}) => {
    const [ input , setInput ] = useState ( "" ) ;

  const fetchDataName = ( value ) => {
    const results = artisans.filter( ( artisan ) => {
      return (
        (
          value &&
          artisan &&
          artisan.name &&
          artisan.name.toLowerCase ( ).includes ( value.toLowerCase ( ) )
        ) ||   
        (
          value &&
          artisan &&
          artisan.location &&
          artisan.location.toLowerCase ( ).includes ( value.toLowerCase ( ) )
        ) ||   
        (
          value &&
          artisan &&
          artisan.specialty &&
          artisan.specialty.toLowerCase ( ).includes ( value.toLowerCase ( ) )
        ) 
      ) 
    } ) ;
    
    setResultsName ( results ) ;
    
  } ;

  const handleChange = ( value ) => {
    setInput ( value ) ;
    fetchDataName ( value );
    
  } ;
  const handleClick = (  ) => {
    setInput ( "" ) ;
    fetchDataName ( "" );
    
  } ;

    const [ burger_class , setBurgerClass ] = useState ( "burger-bar unclicked" )
    const [ menu_class , setMenuClass ] = useState ( "menu hidden" )
    const [ isMenuClicked , setIsMenuClicked ] = useState ( false )
  
    const updateMenu = () => {
  
          if( !isMenuClicked ) {
              setBurgerClass ( "burger-bar clicked" )
              setMenuClass ( "menu visible" )
          }
  
          else {
              setBurgerClass ( "burger-bar unclicked" )
              setMenuClass ( "menu hidden" )
          }
          setIsMenuClicked ( !isMenuClicked )
    }

    return (

      <header>

        <MediaQuery only screen and maxWidth={575}>
          <div style={{ position: "relative" , zIndex: "3" ,  width: "100vw" , backgroundColor: "white" , boxShadow: "0px 1px 50px black" }}>
            <div className="col col-12" >
              <Link to="/">
                <img src={logo}  className="col col-12" style={{ width:"60vw" , paddingLeft: "5vw" }} alt="logo"></img>
              </Link>  
            </div>  
            <div className="col col-10">     
              <div className="row justify-content-end">
                <input
                  className="col col-6"
                  style={{ marginBottom: "70px" , paddingRight: "3vw" , fontSize: "3.5vw" }}
                  id="searching__item"
                  type="text"
                  placeholder="🔍Rechercher"
                  value={input}
                  onChange={(e) => handleChange(e.target.value)}
                  onClick={(e) =>  handleClick(e.target.value)} 
                />
                <div id="burger__menu" className="col col-1" style={{ marginBottom: "60px" }}>
                  <div className="burger__menu-container"  onClick={updateMenu}>
                      <div className={burger_class} ></div>
                      <div className={burger_class} ></div>
                      <div className={burger_class} ></div>
                  </div>
                </div>
              </div>        
            </div>             
          </div>
          <div className={menu_class}> 
            <div className="row">
              <div  style={{ color: "white" , paddingTop: "10vh" , fontSize: "5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "10vw" }} onClick={updateMenu}>x</div>
              <Link style={{ color: "white" , paddingTop: "2vh" , fontSize: "4vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "15vw" }} onClick={updateMenu} to="/Bâtiment">Bâtiment</Link>
              <Link style={{ color: "white" , paddingTop: "10vh" , fontSize: "4vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "15vw" }} onClick={updateMenu} to="/Fabrication">Fabrication</Link>
              <Link style={{ color: "white" , paddingTop: "10vh" , fontSize: "4vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "15vw" }} onClick={updateMenu} to="/Alimentation">Alimentation</Link>  
              <Link style={{ color: "white" , paddingTop: "10vh" , fontSize: "4vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "15vw" }} onClick={updateMenu} to="/Services">Services</Link>
            </div>
          </div>    
        </MediaQuery>

        <MediaQuery only screen and minWidth={576} maxWidth={767}>
          <div style={{ position: "relative" , zIndex: "1" , backgroundColor: "white" , boxShadow: "0px 1px 50px black" }}>
            <div className="row" style={{ width: "100vw" }}>
              <div className="col col-4">
                <Link to="/">
                  <img src={logo}  className="col col-12" style={{ paddingLeft: "5vw" }} alt="logo"></img>
                </Link>  
              </div>  
              <div className="col col-8" style={{ paddingTop: "50px"  }}>     
                <div className="row justify-content-end">
                  <input
                    className="col col-7"
                    style={{ marginBottom: "20px" , marginRight: "3vw", fontSize: "2vw" }}
                    id="searching__item"
                    type="text"
                    placeholder="🔍Rechercher"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    onClick={(e) =>  handleClick(e.target.value)} 
                  />
                </div>
              </div>
              <ul className=" justify-content-center">       
                <CustomLink style={{ fontSize: "2.5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Bâtiment">Bâtiment</CustomLink>
                <li style={{ fontSize: "2.5vw" }}>|</li>     
                <CustomLink style={{ fontSize: "2.5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Fabrication">Fabrication</CustomLink>
                <li style={{ fontSize: "2.5vw" }}>|</li> 
                <CustomLink style={{ fontSize: "2.5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Alimentation">Alimentation</CustomLink>
                <li style={{ fontSize: "2.5vw" }}>|</li> 
                <CustomLink style={{ fontSize: "2.5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Services">Services</CustomLink>
              </ul>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery only screen and minWidth={768} maxWidth={991}>
          <div style={{ position: "relative" , zIndex: "1" , backgroundColor: "white" , boxShadow: "0px 1px 50px black" }}>
            <div className="row"  style={{width: "100vw"}}>
              <div className="col col-lg-5">
                <Link to="/">
                  <img src={logo}  className="col col-10" style={{ marginLeft: "10vw" }} alt="logo"></img>
                </Link>  
              </div>  
              <div className="col col-7" style={{ paddingTop: "60px" }}>     
                <div className="row justify-content-end">
                  <input
                    className="col col-8"
                    style={{ marginBottom: "20px" , marginRight: "5vw", fontSize: "2vw" }}
                    id="searching__item"
                    type="text"
                    placeholder="🔍Rechercher"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    onClick={(e) =>  handleClick(e.target.value)} 
                  />
                </div>  
              </div>
              <ul className=" justify-content-center">       
                <CustomLink style={{ fontSize: "2vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }}  className="nav__item" to="/Bâtiment">Bâtiment</CustomLink>
                <li style={{ fontSize: "2vw" }}>|</li>     
                <CustomLink style={{ fontSize: "2vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Fabrication">Fabrication</CustomLink>
                <li style={{ fontSize: "2vw" }}>|</li> 
                <CustomLink style={{ fontSize: "2vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Alimentation">Alimentation</CustomLink>
                <li style={{ fontSize: "2vw" }}>|</li> 
                <CustomLink style={{ fontSize: "2vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Services">Services</CustomLink>
              </ul>
            </div>
          </div>  
        </MediaQuery>

        <MediaQuery only screen and minWidth={992} maxWidth={1399}>
          <div style={{ position: "relative" , zIndex: "1" , backgroundColor: "white" , boxShadow: "0px 1px 50px black" }}>
            <div className="row"  style={{ width: "100vw"}}>
              <div className="col col-4">
                <Link to="/">
                  <img src={logo}  className="col col-12" style={{ paddingLeft: "5vw" }} alt="logo"></img>
                </Link>  
              </div>  
              <div className="col col-8" style={{ paddingTop: "50px" }}>     
                <div className="row justify-content-end">
                  <input
                    className="col col-7"
                    style={{ marginBottom: "40px" , marginRight: "3vw", fontSize: "1.5vw" }}
                    id="searching__item"
                    type="text"
                    placeholder="🔍Rechercher"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    onClick={(e) =>  handleClick(e.target.value)} 
                  />
                </div>
                <ul>       
                  <CustomLink style={{ fontSize: "1.5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Bâtiment">Bâtiment</CustomLink>
                  <li style={{ fontSize: "1.5vw" }}>|</li>     
                  <CustomLink style={{ fontSize: "1.5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Fabrication">Fabrication</CustomLink>
                  <li style={{ fontSize: "1.5vw" }}>|</li> 
                  <CustomLink style={{ fontSize: "1.5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Alimentation">Alimentation</CustomLink>
                  <li style={{ fontSize: "1.5vw" }}>|</li> 
                  <CustomLink style={{ fontSize: "1.5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Services">Services</CustomLink>
                </ul>
              </div>
            </div>
          </div>  
        </MediaQuery>

        <MediaQuery only screen and minWidth={1400}>
          <div style={{ position: "relative" , zIndex: "1" , backgroundColor: "white" , boxShadow: "0px 1px 50px black" }}>
            <div className="row"  style={{ width: "100vw" }}>
              <div className="col col-4" >
                <Link to="/">
                  <img src={logo}  className="col col-12" style={{ paddingLeft: "5vw" }} alt="logo"></img>
                </Link>  
              </div>  
              <div className="col col-8" style={{ paddingTop: "80px" }}>     
                <div className="row justify-content-end">
                  <input
                    className="col col-5"
                    style={{ marginBottom: "30px" , marginRight: "3vw" , fontSize: "1.2vw" }}
                    id="searching__item"
                    type="text"
                    placeholder="🔍Rechercher"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    onClick={(e) =>  handleClick(e.target.value)}                     
                  />
                </div>
                <ul>       
                  <CustomLink style={{ fontSize: "1.2vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Bâtiment">Bâtiment</CustomLink>
                  <li style={{ fontSize: "1.2vw" }}>|</li>     
                  <CustomLink style={{ fontSize: "1.2vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Fabrication">Fabrication</CustomLink>
                  <li style={{ fontSize: "1.2vw" }}>|</li> 
                  <CustomLink style={{ fontSize: "1.2vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Alimentation">Alimentation</CustomLink>
                  <li style={{ fontSize: "1.2.vw" }}>|</li> 
                  <CustomLink style={{ fontSize: "1.2vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "2vw" }} className="nav__item" to="/Services">Services</CustomLink>
                </ul>
              </div>
            </div>
          </div>
        </MediaQuery>

      </header>
    
    );
};



function CustomLink ({ to , children , ...props }) {

  const resolvedPath = useResolvedPath ( to )

  const isActive = useMatch ( { path: resolvedPath.pathname , end: true } )

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default  Header;