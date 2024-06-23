import "./Loader.scss";
import Spinner from "./Spinner";

function Loader() {
  return (
    <div className="loader">
      <Spinner className="spinner-large" />
      <h2 className="loader-heading">Loading...</h2>;
    </div>
  );
}

export default Loader;
