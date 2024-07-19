import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const UserDetails = () => {
  const { userId } = useParams();

  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
  const userData = data?.find((user) => user.id === parseInt(userId));
  console.log(userData);

  return (
    <div style={{ height: "70rem" }}>
      {userData ? (
        <div className="container my-5">
          <h2>{userData.name}</h2>
          <ul class="list-group">
            <li className="list-group-item">
              <strong>Name: </strong>
              {userData.name}
            </li>
            <li className="list-group-item">
              <strong>Username: </strong>
              {userData.username}
            </li>
            <li className="list-group-item">
              <strong>Email: </strong>
              {userData.email}
            </li>
            <li className="list-group-item">
              <strong>Phone: </strong>
              {userData.phone}
            </li>
            <li className="list-group-item">
              <strong>Website: </strong>
              {userData.website}
            </li>
            <li className="list-group-item">
              <strong>Company: </strong>
              {userData.company.name} ({userData.company.catchPhrase})
            </li>
            <li className="list-group-item">
              <strong>City: </strong>
              {userData.address.city}
            </li>
            <li className="list-group-item">
              <strong>Zipcode: </strong>
              {userData.address.zipcode}
            </li>
          </ul>
        </div>
      ) : (
        <div className="d-flex justify-content-center alig-items-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
