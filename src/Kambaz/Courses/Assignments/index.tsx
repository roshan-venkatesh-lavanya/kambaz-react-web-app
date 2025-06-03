import { ListGroup, Modal, Button } from "react-bootstrap";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControl from "./AssignmentControls";
import { FaAngleDown, FaPlus, FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isFaculty = currentUser?.role === "FACULTY";
  const courseAssignments = assignments.filter((a: any) => a.course === cid);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setAssignmentToDelete(id);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
    }
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  return (
    <div id="wd-assignments" className="p-3">
      <AssignmentControl />
      <br />

      <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <span>
            <BsGripVertical className="fs-4" />
            <FaAngleDown className="me-2" />ASSIGNMENTS 40% of Total
          </span>
          <div className="d-flex align-items-center gap-2">
            <span className="fs-6 border border-light px-2 py-1 rounded">
              40% of total
            </span>
            {isFaculty && (
              <FaPlus
                className="fs-5 cursor-pointer"
                role="button"
                onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
              />
            )}
            <IoEllipsisVertical className="fs-4" />
          </div>
        </div>

        <ListGroup className="wd-lessons rounded-0">
          {courseAssignments.length === 0 ? (
            <ListGroup.Item className="p-3 text-muted">
              No assignments found for this course.
            </ListGroup.Item>
          ) : (
            courseAssignments.map((a: any) => (
              <ListGroup.Item key={a._id} className="wd-lesson p-3 ps-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex align-items-start me-3">
                    <BsGripVertical className="me-2 fs-4" />
                    <MdAssignment className="me-2 fs-4 text-success" />
                  </div>
                  <div className="flex-grow-1">
                    <Link
                      to={`/Kambaz/Courses/${cid}/Assignments/${a._id}`}
                      className="wd-assignment-link text-decoration-none"
                    >
                      {a.title}
                    </Link>
                    <br />
                    <small>
                      <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {a.availableFromDate} at 12:00 am | Due {a.dueDate} at 11:59 pm | {a.points} pts
                    </small>
                  </div>
                  <div>
                    {isFaculty && (
                      <Button variant="danger" size="sm" onClick={() => handleDeleteClick(a._id)}>
                        <FaTrash />
                      </Button>
                    )}
                  </div>
                </div>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </ListGroup.Item>

      <Modal show={showDeleteDialog} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
