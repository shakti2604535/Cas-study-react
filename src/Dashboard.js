import MainContainer from "./MainContainer";
import "./Dashboard.module.css"
import { Outlet } from 'react-router-dom';
const Dashboard = () => {

  return (
    <>
      <MainContainer />
      <main >
        <Outlet />
      </main>
    </>
  )
}
export default Dashboard;