import { SearchResult } from './SearchResult';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';


export const SearchResultsList = ( { results } ) => {

    const remove = ( e ) => {
      const element = document.getElementById("searching__block")  
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      } 
    }   

  return (
    <div>
      <MediaQuery maxWidth={575}>
        <div id="searching__block">
          <div id="searching__block" style={{ position: "absolute" , zIndex: "4" , width: "40vw" , backgroundColor: "white" , paddingRight: "2vw" , paddingLeft: "2vw" , paddingBottom: "1vh" , paddingTop: "1vh"  , marginTop: "-5vh" , marginLeft: "25vw"  }} className="justify-content-end">
            {results.map((result, id) => {
              return  <Link to={`/artisans/${result.id}`} onClick={(e) => remove(e.target.value)} key={id} className="result__searching-item" style={{ textDecoration: "none" }}>
                        <div style={{ border: "1px solid #00497c" , borderStyle: "none none solid none" }}>
                          <SearchResult result={result.name} />
                          <SearchResult result={result.location} />
                          <SearchResult result={result.specialty} />
                        </div> 
                      </Link>           
            })}
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={576} maxWidth={767}>
        <div id="searching__block">
          <div style={{ position: "absolute" , zIndex: "4" , width: "40vw" , backgroundColor: "white" , paddingRight: "2vw" , paddingLeft: "2vw" , paddingBottom: "1vh" , paddingTop: "1vh" , marginTop: "100px" , marginRight: "2vw" }} className="justify-content-end top-0 end-0">
            {results.map((result, id) => {
              return  <Link to={`/artisans/${result.id}`} onClick={(e) => remove(e.target.value)} key={id} className="result__searching-item" style={{ textDecoration: "none" }}>
                        <div style={{ border: "1px solid #00497c" , borderStyle: "none none solid none" }}>
                          <SearchResult result={result.name} />
                          <SearchResult result={result.location} />
                          <SearchResult result={result.specialty} />
                        </div>
                      </Link>        
            })}
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={768} maxWidth={991}>
        <div id="searching__block">
          <div style={{ position: "absolute" , zIndex: "4" , width: "40vw" , backgroundColor: "white" , paddingRight: "2vw" , paddingLeft: "2vw" , paddingBottom: "1vh" , paddingTop: "1vh" , marginTop: "100px" , marginRight: "2vw" }} className="justify-content-end top-0 end-0">
            {results.map((result, id) => {
              return  <Link to={`/artisans/${result.id}`} onClick={(e) => remove(e.target.value)} key={id} className="result__searching-item" style={{ textDecoration: "none" }}>
                        <div style={{ border: "1px solid #00497c" , borderStyle: "none none solid none" }}>
                          <SearchResult result={result.name} />
                          <SearchResult result={result.location} />
                          <SearchResult result={result.specialty} />
                        </div>
                      </Link>        
            })}
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={992} maxWidth={1399}>
        <div id="searching__block">
          <div style={{ position: "absolute" , zIndex: "4" , width: "40vw" , backgroundColor: "white" , paddingRight: "2vw" , paddingLeft: "2vw" , paddingBottom: "1vh" , paddingTop: "1vh" , marginTop: "100px" , marginRight: "2vw" }} className="justify-content-end top-0 end-0">
            {results.map((result, id) => {
              return  <Link to={`/artisans/${result.id}`} onClick={(e) => remove(e.target.value)} key={id} className="result__searching-item" style={{ textDecoration: "none" }}>
                        <div style={{ border: "1px solid #00497c" , borderStyle: "none none solid none" }}>
                          <SearchResult result={result.name} />
                          <SearchResult result={result.location} />
                          <SearchResult result={result.specialty} />
                        </div>
                      </Link>        
            })}
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1400}>
      <div id="searching__block">
        <div style={{ position: "absolute" , zIndex: "4" , width: "27vw" , backgroundColor: "white" , paddingRight: "2vw" , paddingLeft: "2vw" , paddingBottom: "1vh", paddingTop: "1vh" , marginTop: "120px" , marginRight: "2vw" }} className="justify-content-end top-0 end-0">
          {results.map((result, id) => {
            return  <Link to={`/artisans/${result.id}`} onClick={(e) => remove(e.target.value)} key={id} className="result__searching-item" style={{ textDecoration: "none" }}>
                      <div  style={{ border :"1px solid #00497c" , borderStyle: "none none solid none" }}>
                        <SearchResult result={result.name} />
                        <SearchResult result={result.location} />
                        <SearchResult result={result.specialty} />
                      </div>
                    </Link>        
          })}        
        </div>
      </div>
    </MediaQuery>
  </div>  
  );
};

