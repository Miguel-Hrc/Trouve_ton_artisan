import { useState } from 'react';
import { SearchResultsList } from './SearchReusltList';
import { Header } from './Header';


function SearchBar() {

  const [ results , setResultsName ] = useState ( [ ] ) ;
  
  return (    
    <div style={{ width: "100vw" }} >
      <Header setResultsName={setResultsName} />
      {results && results.length > 0 && <SearchResultsList results={results} />}     
    </div>
  );
}

export default SearchBar;

