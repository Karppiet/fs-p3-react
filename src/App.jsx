// import "./App.css";
import { React, useState } from "react";
import "./App.css";
import Form from "./components/SnippetForm"
import Snippets from "./components/Snippets"


const App = () => {
  return (
    <div>
      <h1>Snippet API</h1>
      <br />
      <br />
      <Form></Form>
      <Snippets></Snippets>
    </div>
  );
};

export default App;
