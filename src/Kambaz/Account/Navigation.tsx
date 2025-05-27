import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox } from "react-icons/fa6";
import { LiaCogSolid } from "react-icons/lia";

export default function Navigation() {
  return (
    <div id="wd-navigation" className="bg-black text-white vh-100 p-2">
      <img src="/images/NEU.png" alt="Northeastern Logo" width="75px" className="mb-4" />
      <div className="d-flex flex-column gap-3">
        <Link to="/Kambaz/Account" className="text-white text-decoration-none text-center">
          <FaRegCircleUser className="fs-1" />
          <div>Account</div>
        </Link>
        <Link to="/Kambaz/Dashboard" className="text-white text-decoration-none text-center">
          <AiOutlineDashboard className="fs-1" />
          <div>Dashboard</div>
        </Link>
        <Link to="/Kambaz/Courses" className="text-white text-decoration-none text-center">
          <LiaBookSolid className="fs-1" />
          <div>Courses</div>
        </Link>
        <Link to="/Kambaz/Calendar" className="text-white text-decoration-none text-center">
          <IoCalendarOutline className="fs-1" />
          <div>Calendar</div>
        </Link>
        <Link to="/Kambaz/Inbox" className="text-white text-decoration-none text-center">
          <FaInbox className="fs-1" />
          <div>Inbox</div>
        </Link>
        <Link to="/Labs" className="text-white text-decoration-none text-center">
          <LiaCogSolid className="fs-1" />
          <div>Labs</div>
        </Link>
      </div>
    </div>
  );
}
