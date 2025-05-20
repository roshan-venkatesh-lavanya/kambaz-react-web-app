import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div
      id="wd-dashboard"
      className="vh-100 d-flex flex-column"
      style={{ marginLeft: "120px", padding: "20px" }} // Shift for sidebar
    >
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
          <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
          <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
    
        
        
<Col className="wd-dashboard-course" style={{ width: "300px" }}>
<Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/javascript.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 JavaScript</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Back End</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
      </Link>
</Card>
</Col>
<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/htmlcss.jpg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 HTML AND CSS</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Front end
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/bootstrap.jpg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 Bootstrap</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Hardware programming
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/mongodb.jpg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 MONGODB</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Learning Algorithms
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/expressjs.jpg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6789 ExpressJs</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Complete AI and ML course
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/nodejs.jpg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7890 NodeJs</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Learn all PDP ways
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>
      </Row>
      </div>
    </div>
);}