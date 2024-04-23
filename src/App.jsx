import React, { useState } from "react";
import Head from "./Head";
import History from "./History";
import Form from "./Form";

const App = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [history,setHistory] = useState([])

  console.log(history)

  console.log(history)

  return (
    <>
      <div className="main">
        <div className="container">
          <Head />
          {formVisible ? <Form setFormVisible={setFormVisible} setHistory={setHistory} history={history}  /> : <History history={history} />}
          {!formVisible && (
            <div
              style={{ display: "flex", justifyContent: "center" }}
              onClick={() => setFormVisible(true)}
            >
              <img src="./images/p.jpg" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
