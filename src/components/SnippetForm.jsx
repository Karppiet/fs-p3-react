import { useState } from "react";
import axios from "axios";
// import { useApi } from "../hooks/use_Api";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_BASE_URL =
     import.meta.env.VITE_API_URL;

function SnippetForm() {


  return (
    <Form  >
      <Row>
        <Col>
          <Form.Control type="title" placeholder="Title"  />
        </Col>
        <Col>
          <Form.Control type="language" placeholder="Language"></Form.Control>
        </Col>
        <Col>
          <Form.Control type="code" placeholder="Code" />
        </Col>
        <Col>
          <Form.Control type="tags" placeholder="Tags" />
        </Col>
      </Row>
      <br />
      <br />
      <button
        className="btn btn-primary w-4"
        type="submit"
      >
        Post
      </button>
    </Form>
  );
}

export default SnippetForm;
