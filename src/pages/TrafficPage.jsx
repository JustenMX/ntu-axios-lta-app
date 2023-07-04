/* eslint-disable react/prop-types */
import TrafficImages from "../components/TrafficImages";

function TrafficPage(props) {
  const { trafficData, handlerAddWatchList } = props;
  return (
    <div>
      <TrafficImages
        trafficData={trafficData}
        handlerAddWatchList={handlerAddWatchList}
      />
    </div>
  );
}

export default TrafficPage;
