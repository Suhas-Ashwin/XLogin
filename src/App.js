import "./styles.css";
import { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(userName, password);
    if (userName === "user" && password === "password") {
      setIsSubmited(true);
    } else {
      setIsInvalid(true);
    }
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      {isInvalid && <p> Invalid username or password </p>}
      {isSubmited ? (
        <p> Welcome, {userName}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="label">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="label">
            <label htmlFor="password"> Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
