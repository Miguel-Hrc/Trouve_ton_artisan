import artisans from '../myData';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import BackgroundImgPhone from '../assets/img/BackgroundImgPhone.jpg';

export const Home = () => {

  const top = artisans.filter ( artisans =>
    artisans.top === true ) ;   

  return ( 

    <main>

<img src={BackgroundImgPhone}alt="BackgroundImg"></img>
        <div>
          <h2> Comment trouver mon artisan ?</h2>
          <p>Choisissez la catégorie d’artisanat que vous souhaitez dans le menu.</p> 
          <p>Choisissez un artisan parmi les artisans selon la catégorie ou la localisation.</p>
          <p>Contactez le en remplissant le formulaire de contact.</p>
          <p>Une réponse sera apportée sous 48h.</p>
        </div> 
        <section>   
          <div>
            <h2>Artisans du mois :</h2>
            <div>
              {top.map((artisan)=>{
                return ( 
                  <article key={artisan.id}>
                    <Link to={`/artisans/${artisan.id}`} style={{ textDecoration: "none" }}>
                      <div>
                        <h5>{artisan.name}</h5>
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
                          />
                          <Box sx={{ ml: 2 }}></Box>
                        </Box>
                        <p>{artisan.specialty}</p>
                        <p>{artisan.location}</p>    
                      </div>
                    </Link>     
                  </article>
                );
              })}
            </div>  
          </div>
        </section>
    </main>
    
  );
};

export default Home;