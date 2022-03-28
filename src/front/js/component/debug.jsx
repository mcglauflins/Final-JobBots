import React from "react";
import { prettyPrintJson } from "pretty-print-json";

const Debug = (props) => {
  return (
    <div className="debug">
      <p>{props.message}</p>
      <pre
        className="json-container"
        dangerouslySetInnerHTML={{
          __html: prettyPrintJson.toHtml(props.object, {
            indent: 2,
            lineNumbers: true,
          }),
        }}
      ></pre>
    </div>
  );
};

export default Debug;
