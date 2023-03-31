import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeCard ({codeString}) {
  return (
    <div className="codecard">
        <SyntaxHighlighter
          language="jsx"
          style={atomOneDark}
          customStyle={{
            padding: "10px",
            borderRadius: '10px'
          }}
        >
          {codeString}
        </SyntaxHighlighter>
    </div>
  );
};
