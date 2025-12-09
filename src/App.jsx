
import { React, useState } from "react";
import './App.css'; ;
import Form from "./components/SnippetForm"
import Fetch from "./components/Fetch_axios"




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
