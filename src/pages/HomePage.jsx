/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import NavHeader from "../components/NavHeader";

function HomePage(props) {
  const { getTrafficImages, headerCaption, setHeaderCaption } = props;
  return (
    <>
      <div className="grid min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
        <NavHeader
          getTrafficImages={getTrafficImages}
          headerCaption={headerCaption}
          setHeaderCaption={setHeaderCaption}
        />
        <Outlet />
      </div>
    </>
  );
}

export default HomePage;
