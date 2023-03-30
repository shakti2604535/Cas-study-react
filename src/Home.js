import './Home.css';
const Home = () => {
  return <>
    <div className="home">
      <img src={localStorage.getItem('image')} 
      className="img-responsive center-block d-block mx-auto text-center" alt="Sample " />
      <p className="text-center">Welcome to dashboard</p>
    </div>
  </>
}
export default Home;