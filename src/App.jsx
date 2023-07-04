import "./index.css";
// Dependecies
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components Import
import HomePage from "./pages/HomePage";
import TrafficPage from "./pages/TrafficPage";
import ErrorPage from "./pages/ErrorPage";
import WatchListPage from "./pages/WatchListPage";
// Data Import
import govAPI from "./api/govAPI";

function App() {
  // State Managmenet
  const [trafficData, setTrafficData] = useState([{}]);
  const [watchList, setWatchList] = useState([{}]);

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

  // ADD Watch List
  const handlerAddWatchList = (item) => {
    //validation
    watchList.map((watchItem) => {
      if (item.camera_id === watchItem.camera_id) {
        alert("🚫 You already have this in your Watch List");
        return;
      } else {
        const newList = [...watchList, item];
        setWatchList(newList);
      }
    });
  };
  console.log(watchList);

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
            element={
              <TrafficPage
                trafficData={trafficData}
                handlerAddWatchList={handlerAddWatchList}
              />
            }
          />
          <Route
            path="watchlist"
            element={<WatchListPage watchList={watchList} />}
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
