import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const Users = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  console.log(data);
  return (
    <div className="container my-4">
      <h1 className="">List of Users</h1>
      <ul className="list-group">
        {data ? (
          data.map((user) => (
            <li key={user.id} className="list-group-item">
              <h4>{user.name}</h4>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Company: {user.company.name}</p>
              <Link className="btn btn-primary" to={`/userDetails/${user.id}`}>
                View Details
              </Link>
            </li>
          ))
        ) : (
          <div className="d-flex justify-content-center ">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Users;
