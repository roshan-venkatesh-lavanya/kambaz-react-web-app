import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaAngleRight } from "react-icons/fa";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import People from "./People/Table";


export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  // Find the specific course by ID
  const course = courses.find((course: any) => course._id === cid);
  
  // If course not found, show error message
  if (!course) {
    return (
      <div className="p-3">
        <h1>Course not found</h1>
        <p>The requested course could not be found.</p>
      </div>
    );
  }

  // Get current section from pathname
  const currentSection = pathname.split("/")[4] || "Home";

  return (
    <div id="wd-courses">
      {/* Course Header with Breadcrumb */}
      <h2 className="text-danger">
        <FaAngleRight className="me-1" />
        {course.name} &gt; {currentSection}
      </h2>
      <hr />
      
      {/* Main Content Area */}
      <div className="d-flex">
        {/* Navigation Sidebar */}
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        
        {/* Course Content */}
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Zoom" element={<h2>Zoom</h2>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<h2>Grades</h2>} />
            <Route path="People" element={<People />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}