import { Helmet ,HelmetProvider} from "react-helmet-async" 
const SearchBar = () => 


( <HelmetProvider> <> <Helmet>  <script async src="https://cse.google.com/cse.js?cx=84829923b484e47ab"></script> </Helmet>
 
 
 <div style={{width:'60%',margin:'10% auto 0%'}}>
<div className="gcse-search"></div>


</div>

 </>
 </HelmetProvider> ) 

 export default SearchBar;

// export default SearchBar;