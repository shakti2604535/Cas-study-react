import { Helmet ,HelmetProvider} from "react-helmet-async" ;
import './SearchBar.css';
const SearchBar = () => 
( <HelmetProvider> <> <Helmet> 
     <script async src="https://cse.google.com/cse.js?cx=84829923b484e47ab"></script> </Helmet>
 <div className="searchBarContainer">
<div className="gcse-search"></div>
</div>
 </>
 </HelmetProvider> ) 
 export default SearchBar;
