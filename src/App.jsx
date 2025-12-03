// import "./App.css";
import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import Snippets from "./components/Snippets"

const App = () => {
  return (
    <div>
      <h1>Snippet API</h1>

      <br />
      <br />
      <Form>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Title" />
          </Col>
          <Col>
        <Form.Select aria-label="Language">
          <option value="">Language</option>
          <option value="apple">Javascript</option>
          <option value="banana">Python</option>
          <option value="orange">Java</option>
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
        <Button>Add snippet</Button> 
        <br /> 
        <br />
        <Button>See snippets</Button>
      </Form>
      <Snippets></Snippets>
    </div>
  );
};

export default App;
