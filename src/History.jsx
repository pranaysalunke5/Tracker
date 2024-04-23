import React from "react";

const History = ({ history }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <h3>Recent Transactions</h3>
          <h3>See all</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "100%",alignItems:'center',justifyContent:'center' }}>
          {history?.map((item, index) => {
            return (
              <div
                style={{
                  padding: "12px",
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-evenly",
                  alignItems:'center'
                }}
                key={index}
              >
                <img src="./images/Icone.jpg" alt="" />
                <h2>{item.title}</h2>
                <h2>{item.amount}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default History;
