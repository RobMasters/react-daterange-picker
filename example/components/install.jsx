import React from 'react';
import createReactClass from 'create-react-class';
import CodeSnippet from './code-snippet';


const Install = createReactClass({
  render() {
    return (
      <div className="install">
        <h2>Install</h2>
        <CodeSnippet language="bash" toggle={false}>
          npm install react-daterange-picker
        </CodeSnippet>
      </div>
    );
  },
});

export default Install;
