/* eslint-disable react/prop-types */
import Button from "./Button";
function TrafficImages(props) {
  const { trafficData } = props;
  //
  return (
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="flex justify-center items-end gap-4 mb-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8">
          {trafficData.items?.[0]?.cameras?.map((item) => {
            return (
              <div
                key={item.camera_id}
                className="rounded-xl group block relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 shadow-2xl shadow-blue-700 flex-row"
              >
                <div>
                  <div className="aspect-w-320 aspect-h-240">
                    <img
                      src={item.image}
                      alt={item.camera_id}
                      className="object-cover rounded w-full h-full"
                    />
                  </div>

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      latitude: {item.location.latitude}
                    </h3>
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      longitude: {item.location.longitude}
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                      Time: {item.timestamp}
                    </p>
                  </div>
                </div>

                <Button
                  className="inline-block rounded border border-zinc-950 bg-zinc-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-zinc-950 focus:outline-none focus:ring active:text-zinc-900 mt-5"
                  buttonLabel="Add to Watch List"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrafficImages;
