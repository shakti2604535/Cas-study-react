
import { NavLink } from 'react-router-dom';
import classes from './MainContainer.module.css'
const  MainContainer= () => {

    return (
        <>
 
          <nav>
          <p>{localStorage.getItem('name')}</p>
           
      <ul >
        <li>
          
          <NavLink to=""
             className={({ isActive }) =>
             isActive ? classes.active : undefined
           }
           end>Home</NavLink>
        </li>
        <li>
        <NavLink to="contactform"
             className={({ isActive }) =>
             isActive ? classes.active : undefined
           }
          
           end>Contact Form</NavLink>
        </li>
        <li>
        <NavLink to="search"
             className={({ isActive }) =>
             isActive ? classes.active : undefined
           }
           end>Search</NavLink>
        </li>
      </ul>
    </nav>

        </>
    )
}

export default MainContainer;