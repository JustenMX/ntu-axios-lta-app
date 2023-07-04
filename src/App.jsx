import "./index.css";
// Dependecies
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components Import
import HomePage from "./pages/HomePage";
import TrafficPage from "./pages/TrafficPage";
import ErrorPage from "./components/ErrorPage";
// Data Import
import govAPI from "./api/govAPI";

function App() {
  // State Managmenet
  const [trafficData, setTrafficData] = useState({});
  // GET API
  const getTrafficImages = async () => {
    try {
      const response = await govAPI.get(`/traffic-images`);
      console.log(response.data);
      setTrafficData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTrafficImages();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage getTrafficImages={getTrafficImages} />}
        >
          <Route
            path="traffic"
            element={<TrafficPage trafficData={trafficData} />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
