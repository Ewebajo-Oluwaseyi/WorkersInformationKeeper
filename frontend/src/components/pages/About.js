import React from 'react';

function About() {
    return (
        <div style={{alignContent: 'center', justifyContent: 'center', margin: '1rem 0'}}>
            <h1>About This App</h1>
            <p style={{marginBottom: '5px', padding: '8px'}}>
                This is a full stact react app for keeping workers information
            </p>   
            <p style={{background: 'dark', padding: '8px'}}>
                <strong>Version:</strong> 1.0.0
            </p>
        </div>
    )
}

export default About
