import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({
  onDelete,
}: {
  onDelete: () => void;
}) {
  return (
    <div className="float-end d-flex align-items-center gap-2">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <Button variant="outline-danger" size="sm" onClick={onDelete}>
        <FaTrash />
      </Button>
    </div>
  );
}
