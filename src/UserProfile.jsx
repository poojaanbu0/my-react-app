

function UserProfile() {

  const user = {
    name: "Pooja",
    email: "pooja@example.com"
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;