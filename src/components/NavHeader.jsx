/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function NavHeader(props) {
  const { getTrafficImages } = props;
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-slate-50 sm:text-3xl">
                Welcome Back, Justen!
              </h1>

              <p className="mt-1.5 text-sm text-slate-50">
                Images of live traffic conditions along expressways and
                Woodlands & Tuas Checkpoints
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <nav>
                <Button
                  className="inline-block rounded border border-zinc-950 bg-zinc-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-slate-50 focus:outline-none focus:ring active:text-zinc-900 m-2"
                  buttonLabel="View Traffic"
                  buttonFunc={() => {
                    getTrafficImages();
                    navigate("traffic");
                  }}
                />

                <Button
                  className="inline-block rounded border border-zinc-950 bg-zinc-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-slate-50 focus:outline-none focus:ring active:text-zinc-900 m-2"
                  buttonLabel="Watch List"
                />
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavHeader;
