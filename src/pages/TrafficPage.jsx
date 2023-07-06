/* eslint-disable react/prop-types */
import TrafficImages from "../components/TrafficImages";

function TrafficPage(props) {
  const { trafficData, handlerAddWatchList, ToastContainer } = props;
  return (
    <div>
      <TrafficImages
        trafficData={trafficData}
        handlerAddWatchList={handlerAddWatchList}
        ToastContainer={ToastContainer}
      />
    </div>
  );
}

export default TrafficPage;
