
// import { useApi } from "../hooks/use_Api";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from 'react';

const API_BASE_URL =
     import.meta.env.VITE_API_URL;

function SnippetForm() {

  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [code, setCode] = useState('');

    const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { title, language, code };

    try {
      const response = await fetch(`${API_BASE_URL}/api/snippets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <Form onSubmit={handleSubmit} >
      <Row>
        <Col>
          <Form.Control name="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}  />
        </Col>
        <Col>
          <Form.Control name="language" type="text" placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)} />
        </Col>
        <Col>
          <Form.Control name="code" placeholder="Code" value={code}  onChange={(e) => setCode(e.target.value)} />
        </Col>
        <Col>
          <Form.Control type="texts" placeholder="Tags" />
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
    </div> 
  );
}

export default SnippetForm;
