
import { React, useState } from "react";
import './App.css'; ;
import Form from "./components/SnippetForm"
import Snippets from "./components/Snippets"
import Fetch from "./components/Fetch_axios"
import axios from "axios";
import { useApi } from "./hooks/use_Api";


const App = () => {
  return (
    <div>
      <h1>Snippet API</h1>
      <br />
      <br />
      <Form></Form>
      <Fetch></Fetch>
    </div>
  );
};

export default App;
