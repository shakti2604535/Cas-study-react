
import './Home.css'
const Home = () => {
  return <>
    <div style={{ margin: '20% 0' }}>
      <img src={localStorage.getItem('image')} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
      <p className="text-center">Welcome to dashboard</p>
    </div>
  </>
}
export default Home;