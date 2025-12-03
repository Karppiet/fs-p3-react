import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function Snippets() {
    const [Snippets, setSnippets] = useState([])

    const handleClick = async() => {
        const r = await fetch('https://fullstack-snippet-api.onrender.com/api/snippets')
        const data = await r.json();
        setSnippets(data);
        console.log(data);
}

     return(
        <div>
            <div className="snippets-container">
                <div className="snippets-header">
                Snippets
                </div>
                <Button onClick={handleClick}>Show All</Button>
                <div className="snippets-content">
                    <ul className="snippets-list">
                    {Snippets.map((snippet) => (
                        <li key={snippet._id}>
                            <div className="snippet-name">{snippet.title}</div>
                            <div className="snippet-lang">{snippet.language}</div>
                        </li>
                        

                    ))}
                    </ul>
                </div>
            </div>
        </div>    
    )
}

export default Snippets;

