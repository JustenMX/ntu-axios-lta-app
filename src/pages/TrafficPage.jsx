/* eslint-disable react/prop-types */
import TrafficImages from "../components/TrafficImages";

function TrafficPage(props) {
  const { trafficData } = props;
  return (
    <div>
      <TrafficImages trafficData={trafficData} />
    </div>
  );
}

export default TrafficPage;
