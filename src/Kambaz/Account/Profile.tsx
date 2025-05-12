import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="Roshanvl810" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Roshan" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="VL" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2002-10-08" type="date" id="wd-dob" /><br/>
      <input defaultValue="aroshvl@gmail.com" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kambaz/Account/Signin" ><button>Sign out</button> </Link>
    </div>
);}
