import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo.png';
import { useState, React } from 'react';
import './navbar.sass'
import artisans from '../myData';

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
            <div style={{ position: "relative" , zIndex: "3" ,  width: "100vw" , backgroundColor: "white" , boxShadow: "0px 1px 50px black" }}>
                <div className="col col-12" >
                    <Link to="/">
                    <img src={logo} className="col col-12" style={{ width:"60vw" , paddingLeft: "5vw" }} alt="logo"></img>
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
                        <div className="burger__menu-container" onClick={updateMenu}>
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
                    <div style={{ color: "white" , paddingTop: "10vh" , fontSize: "5vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "10vw" }} onClick={updateMenu}>x</div>
                    <Link style={{ color: "white" , paddingTop: "2vh" , fontSize: "4vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "15vw" }} to="/Bâtiment" onClick={updateMenu}>Bâtiment</Link>
                    <Link style={{ color: "white" , paddingTop: "10vh" , fontSize: "4vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "15vw" }} to="/Fabrication" onClick={updateMenu}>Fabrication</Link>
                    <Link style={{ color: "white" , paddingTop: "10vh" , fontSize: "4vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "15vw" }} to="/Alimentation" onClick={updateMenu}>Alimentation</Link>  
                    <Link style={{ color: "white" , paddingTop: "10vh" , fontSize: "4vw" , textDecoration: "none" , paddingRight: "2vw" , paddingLeft: "15vw" }} to="/Services" onClick={updateMenu}>Services</Link>
                </div>
            </div>   
        </header>
    
    );
};

export default  Header;