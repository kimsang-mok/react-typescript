import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState<AuthUser | null>(null);
  function handleLogin() {
    setUser({
      name: "Kimsang",
      email: "kimsang@gmail.com",
    });
  }
  function handleLogout() {
    setUser(null);
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User's name is {user?.name}</div>
      <div>User's email is {user?.email}</div>
    </div>
  );
}
export default User;
