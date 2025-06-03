import { useNavigate } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCourse, deleteCourse, updateCourse, setCourse } from "./Courses/reducer";
import * as db from "./Database";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses, course } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Use enrollments directly from database
  const { enrollments } = db;

  // Filter courses based on user enrollment
  const enrolledCourses = courses.filter((course: any) =>
    enrollments.some((enrollment: any) =>
      enrollment.user === currentUser?._id &&
      enrollment.course === course._id
    )
  );

  const handleAddCourse = () => {
    if (course.name && course.description) {
      // Create the course payload with a pre-generated ID
      const courseId = Math.random().toString(36).substr(2, 9);
      const courseToAdd = {
        ...course,
        _id: courseId,
      };
      
      // Dispatch Redux action to add course
      dispatch(addCourse(courseToAdd));
      
      // Handle enrollment creation
      if (currentUser?._id) {
        const newEnrollment = {
          _id: Math.random().toString(36).substr(2, 9),
          user: currentUser._id,
          course: courseId,
        };
        db.enrollments.push(newEnrollment);
      }
    }
  };

  const handleEditCourse = (courseToEdit: any, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(setCourse(courseToEdit));
  };

  const handleDeleteCourse = (courseId: any, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Dispatch Redux action to delete course
    dispatch(deleteCourse(courseId));
    
    // Handle enrollment deletion
    const enrollmentsToRemove = db.enrollments.filter((enrollment: any) => enrollment.course === courseId);
    enrollmentsToRemove.forEach((enrollment: any) => {
      const index = db.enrollments.indexOf(enrollment);
      if (index > -1) {
        db.enrollments.splice(index, 1);
      }
    });
  };

  const handleUpdateCourse = () => {
    if (course._id && course._id !== "") {
      dispatch(updateCourse(course));
    }
  };

  const handleGoCourse = (courseId: string) => {
    navigate(`/Kambaz/Courses/${courseId}/Home`);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      
      <h5>New Course</h5>
      <br />
      
      <FormControl
        value={course.name}
        className="mb-2"
        placeholder="Course Name"
        onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))}
      />
      <FormControl
        value={course.description}
        className="mb-2"
        placeholder="Course Description"
        onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value }))}
      />
      
      <Button onClick={handleAddCourse} className="me-2">
        Add Course
      </Button>
      <Button 
        className="btn btn-warning"
        onClick={handleUpdateCourse} 
        id="wd-update-course-click"
      >
        Update
      </Button>
      
      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({enrolledCourses.length})
      </h2> 
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {enrolledCourses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Card.Img 
                  src="/images/reactjs.jpg" 
                  variant="top" 
                  width="100%" 
                  height={160} 
                />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name}
                  </Card.Title>
                  <Card.Text 
                    className="wd-dashboard-course-description overflow-hidden" 
                    style={{ height: "100px" }}
                  >
                    {course.description}
                  </Card.Text>
                  
                  <Button 
                    variant="primary"
                    onClick={() => handleGoCourse(course._id)}
                    className="me-2"
                  >
                    Go
                  </Button>
                  
                  <Button
                    className="btn btn-warning me-2"
                    onClick={(event) => handleEditCourse(course, event)}
                    id="wd-edit-course-click"
                  >
                    Edit
                  </Button>
                  
                  <Button
                    onClick={(event) => handleDeleteCourse(course._id, event)}
                    className="btn btn-danger"
                    id="wd-delete-course-click"
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}