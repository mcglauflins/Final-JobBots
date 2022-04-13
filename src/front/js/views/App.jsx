import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./FAQ";

function App() {
  const [faqs, setfaqs] = useState([
    {
      Question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Open: "True",
    },
    {
      Question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Open: "False",
    },
    {
      Question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Open: "False",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} />
  ))}
      </div>
    </div>
  );
}

export default Faq;
