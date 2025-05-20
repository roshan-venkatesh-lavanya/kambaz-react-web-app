import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div
      id="wd-signin-screen"
      className="p-4 rounded shadow bg-white"
      style={{ width: "100%", maxWidth: "400px" }}
    >
      <h1 className="mb-4">Sign in</h1>
      <Form.Control
        id="wd-username"
        placeholder="username"
        className="mb-2"
      />
      <Form.Control
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <Link
        id="wd-signin-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </Link>
      <div>
        <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}