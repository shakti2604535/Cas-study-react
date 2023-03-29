import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';
import './App.css';
import ContactForm from './ContactForm';
import Dashboard from './Dashboard';
import Home from './Home';
import LogIn from './Login';
import Protected from './Protected';
import SearchBar from './SearchBar';


const router = createBrowserRouter([

  { path: '/', element: <LogIn /> },
  {
    path: '/dashboard', element: <Protected Component={Dashboard} />, children: [
      { path: '', element: <Home /> },
      { path: 'contactform', element: <ContactForm /> },
      { path: 'search', element: <SearchBar /> }
    ]
  }

])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );

}

export default App;
