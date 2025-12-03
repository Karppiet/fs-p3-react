import React, { useEffect, useState } from "react";

function Snippets() {
    const [Snippets, setSnippets] = useState([])

    useEffect(() => {
        fetch('https://fullstack-snippet-api.onrender.com/api/snippets')
        .then((r) => r.json())
        .then(setSnippets)
    }, [])

     return(
        <div>
            <div className="snippets-container">
                <div className="snippets-header">
                Snippets
                </div>
                <BUTTON></BUTTON>
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