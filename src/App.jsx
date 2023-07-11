// css
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// Dependecies
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// Components Import
import HomePage from "./pages/HomePage";
import TrafficPage from "./pages/TrafficPage";
import ErrorPage from "./pages/ErrorPage";
import WatchListPage from "./pages/WatchListPage";
// Data Import
import govAPI from "./api/govAPI";

function App() {
  // State Managmenet
  const [headerCaption, setHeaderCaption] = useState(
    "Nice to see you back again!"
  );
  const [trafficData, setTrafficData] = useState([]);
  const [watchList, setWatchList] = useState([]);

  // GET API
  const getTrafficImages = async () => {
    try {
      const response = await govAPI.get(`/traffic-images`);
      // console.log(response.data);
      setTrafficData(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ADD Watch List
  const handlerAddWatchList = (item) => {
    // Check if the item with the same camera_id already exists in the watchList
    const isItemInWatchList = watchList.some(
      (watchItem) => watchItem.camera_id === item.camera_id
    );

    if (isItemInWatchList) {
      toast.error("You already have this camera in the watch list");
    } else {
      // Add the item to the watchList
      setWatchList((prevWatchList) => [...prevWatchList, item]);
      toast.success("Add Successful");
    }
  };
  console.log(watchList);

  // DELETE Watch List
  const handlerDeleteWatchList = (watchItem) => {
    const newList = watchList.filter(
      (item) => item.camera_id !== watchItem.camera_id
    );
    setWatchList(newList);
    toast.success("Delete Successful");
  };

  useEffect(() => {
    getTrafficImages();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              getTrafficImages={getTrafficImages}
              headerCaption={headerCaption}
              setHeaderCaption={setHeaderCaption}
            />
          }
        >
          <Route
            path="traffic"
            element={
              <TrafficPage
                trafficData={trafficData}
                handlerAddWatchList={handlerAddWatchList}
                ToastContainer={ToastContainer}
              />
            }
          />
          <Route
            path="watchlist"
            element={
              <WatchListPage
                watchList={watchList}
                handlerDeleteWatchList={handlerDeleteWatchList}
                ToastContainer={ToastContainer}
              />
            }
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
