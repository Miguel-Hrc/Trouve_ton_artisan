import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo.png';
import { useState, React } from 'react';
import './navbar.sass'

export const Header = () => {

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
            <div>
                <div>
                    <Link to="/">
                    <img src={logo} alt="logo"></img>
                    </Link>  
                </div>  
                <div>     
                    <div>
                        <input
                            id="searching__item"
                            type="text"
                            placeholder="🔍Rechercher"
                        />
                    <div id="burger__menu">
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
                <div>
                    <div onClick={updateMenu}>x</div>
                    <Link to="/*" onClick={updateMenu}>Bâtiment</Link>
                    <Link to="/*" onClick={updateMenu}>Fabrication</Link>
                    <Link to="/*" onClick={updateMenu}>Alimentation</Link>  
                    <Link to="/*" onClick={updateMenu}>Services</Link>
                </div>
            </div>   
        </header>
    
    );
};

export default  Header;