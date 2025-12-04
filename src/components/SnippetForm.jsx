import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SnippetForm() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control type="text" placeholder="Title" />
        </Col>
        <Col>
          <Form.Select aria-label="Language">
            <option value="">Language</option>
            <option value="Javascript">Javascript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Code" />
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Tags" />
        </Col>
      </Row>
      <br />
      <br />
    </Form>
  );
}

export default SnippetForm;
