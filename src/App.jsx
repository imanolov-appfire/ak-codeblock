import * as React from "react";
import { CodeBlock } from "@atlaskit/code";

function App() {
  return (
    <>
      <div></div>
      <h1>Atlaskit CodeBlock</h1>
      <div className="card">
        <CodeBlock
          language="javascript"
          text="const greeting = 'Hello, World!';"
        />
        <br />
        <CodeBlock
          language="typescript"
          text="const greeting = 'Hello, World!';"
        />
      </div>
    </>
  );
}

export default App;
