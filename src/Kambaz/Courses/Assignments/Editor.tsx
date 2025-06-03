import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const isEditing = aid !== "new";
  const existingAssignment = isEditing
    ? assignments.find((a: any) => a._id === aid)
    : null;

  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
    course: cid || "",
  });

  useEffect(() => {
    if (isEditing && existingAssignment) {
      setAssignment({
        title: existingAssignment.title || "",
        description: existingAssignment.description || "",
        points: existingAssignment.points || 100,
        dueDate: existingAssignment.dueDate || "",
        availableFromDate: existingAssignment.availableFromDate || "",
        availableUntilDate: existingAssignment.availableUntilDate || "",
        course: existingAssignment.course || cid || "",
      });
    }
  }, [isEditing, existingAssignment, cid]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateAssignment({ ...assignment, _id: aid }));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-5">
      <Form onSubmit={handleSave}>
        <Form.Group controlId="wd-name" className="mb-4">
          <Form.Label>
            <h3>Assignment Name</h3>
          </Form.Label>
          <Form.Control
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Label>
          <h4>Description</h4>
        </Form.Label>

        <div
          className="form-control mb-4"
          style={{ height: "auto", padding: "1rem", overflowY: "auto" }}
        >
          The assignment is {" "}
          <a
            href="https://docs.google.com/document/d/1R7IuxYxmtciUQ0SQC0msNl1g_Fa_Yp-u9cV3zPdCcsY/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red", textDecoration: "none" }}
          >
            available online
          </a>
          .<br />
          Submit a link to the landing page of your Web application running on
          Netlify.
          <br />
          The landing page should include the following:
          <ul className="mt-2 mb-2">
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kambaz application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          The Kambaz application should include a link to navigate back to the
          landing page.
        </div>

        <Form.Group as={Row} className="mb-4" controlId="wd-points">
          <Form.Label column lg={4} className="text-lg-end">
            Points
          </Form.Label>
          <Col lg={8}>
            <Form.Control
              type="number"
              value={assignment.points}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: parseInt(e.target.value) || 0,
                })
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4" controlId="wd-due-date">
          <Form.Label column lg={4} className="text-lg-end">
            Due
          </Form.Label>
          <Col lg={8}>
            <Form.Control
              type="date"
              value={assignment.dueDate}
              onChange={(e) =>
                setAssignment({ ...assignment, dueDate: e.target.value })
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column lg={4} className="text-lg-end">
            Available From
          </Form.Label>
          <Col lg={8}>
            <Form.Control
              type="date"
              value={assignment.availableFromDate}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  availableFromDate: e.target.value,
                })
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column lg={4} className="text-lg-end">
            Available Until
          </Form.Label>
          <Col lg={8}>
            <Form.Control
              type="date"
              value={assignment.availableUntilDate}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  availableUntilDate: e.target.value,
                })
              }
            />
          </Col>
        </Form.Group>

        <hr />

        <div className="d-flex justify-content-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-2" type="button">
              Cancel
            </Button>
          </Link>
          <Button variant="danger" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
