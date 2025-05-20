import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
   <div
  className="d-flex justify-content-center align-items-center vh-100"
  style={{ marginLeft: "120px" }}
>
      <div
        id="wd-profile-screen"
        className="p-4 rounded shadow bg-white"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">Profile</h3>

        <Form.Control
          defaultValue="alice"
          placeholder="Username"
          className="mb-2"
        />
        <Form.Control
          defaultValue="123"
          placeholder="Password"
          type="password"
          className="mb-2"
        />
        <Form.Control
          defaultValue="Alice"
          placeholder="First Name"
          id="wd-firstname"
          className="mb-2"
        />
        <Form.Control
          defaultValue="Wonderland"
          placeholder="Last Name"
          id="wd-lastname"
          className="mb-2"
        />
        <Form.Control
          defaultValue="2000-01-01"
          type="date"
          id="wd-dob"
          className="mb-2"
        />
        <Form.Control
          defaultValue="alice@wonderland"
          type="email"
          id="wd-email"
          className="mb-2"
        />
        <Form.Select
          defaultValue="FACULTY"
          id="wd-role"
          className="mb-3"
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>

        <Link
          to="/Kambaz/Account/Signin"
          className="btn btn-danger w-100"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
}
