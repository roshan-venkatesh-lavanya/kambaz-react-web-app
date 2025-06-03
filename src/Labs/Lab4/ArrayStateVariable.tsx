import  { useState } from "react";
import { Button, ListGroup, Row, Col } from "react-bootstrap";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="p-3">
      <h2>Array State Variable</h2>
      <Button onClick={addElement} variant="success" className="mb-3">
        Add Element
      </Button>
      <ListGroup>
        {array.map((item, index) => (
          <ListGroup.Item key={index}>
            <Row className="align-items-center">
              <Col xs={6} className="fs-5">{item}</Col>
              <Col xs="auto">
                <Button
                  variant="danger"
                  onClick={() => deleteElement(index)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
