import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Profile</h1>
      <p>
        Showing details for User ID: <strong>{id}</strong>
      </p>
    </div>
  );
}
export default User;
