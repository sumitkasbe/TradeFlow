import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "../watchLists/WatchList";

const Dashboard = () => {
  // const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     window.location.href = "http://localhost:5173/userlogin";
//   } else {
//     setLoading(false);
//   }
// }, []);

  // if (loading) {
  //   return <h2 style={{ textAlign: "center" }}>Loading Dashboard...</h2>;
  
  // }

  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
