import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-3">User Database</h1>
        <p>View Company's user data</p>
        <Link className="btn my-3 bg-body-tertiary" to="/users">
          View List of User
        </Link>
      </div>

      <div className="text-center py-5 bg-body-tertiary">
        <h1 className="display-3">User Statistics</h1>
        <p>View Company's user statistics</p>
        <Link className="btn my-3 btn-primary" to="/statistics">
          View List of User
        </Link>
      </div>
    </div>
  );
};

export default Home;
