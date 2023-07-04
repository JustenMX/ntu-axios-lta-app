import Button from "../components/Button";
import ErrorSVG from "../components/ErrorSVG";

function ErrorPage() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <ErrorSVG />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
        <Button
          className="rounded border border-zinc-950 bg-zinc-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-zinc-950 focus:outline-none focus:ring active:text-zinc-300 m-2"
          buttonLabel="Go Back Home"
          path="/"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
