import React, { useEffect, useState } from "react";

const Head = ({history}) => {
  // console.log(history)

  const [totals , setTotal] = useState(0);
  const [totalExp , setTotalExp] = useState(0)
  const [balance , setBalance] = useState(0)

  const getTotalAmt = () => {
      let total = 0;
      let totalExpence = 0;
      history?.forEach((element) => {
        if (element.type === "income") {
          total += parent(element.amount);       
      } else if (element.type === "expence") {
        totalExpence += parseInt(element.amount)
      }
      })
      setTotal(total)
      setTotalExp(totalExpence)
  };

  const getBalace = () => {
    setBalance(totals - totalExp)
  }

  useEffect (() => {
    getBalace();
  },[totalExp,totals])

  useEffect (() => {
    getTotalAmt();
  },[history])
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
      <div style={{ display: "flex", justifyContent: "space-between",width:'100%',}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap:'5px'
          }}
        >
          <p>Good Morning</p>
          <p>Guest User</p>
        </div>
        <div style={{display:'flex',gap:'10px'}}>
         <img src="./images/Dim.jpg" alt="" style={{height:'40px', width:'40px'}}/>
         <img src="./images/Icone.jpg" alt="" style={{height:'40px', width:'40px'}}/>
        </div>
       
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
         <h4>This Month</h4>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px',backgroundColor:'red',padding:'10px',borderRadius:'16px'}}>
          <div style={{ padding:'5px',borderRadius:'16px'}}>
         <img src="./images/up.jpg" alt="" style={{height:'40px', width:'40px',zIndex:10}} />
         </div>
         <div style={{display:'flex',flexDirection:'column',}}>
         <h4>Spending</h4>
         <h4>${totalExp}</h4>
         </div>
         </div>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px',backgroundColor:'green',padding:'10px',borderRadius:'16px'}}>
          <div style={{padding:'5px',borderRadius:'10px'}}>
         <img src="./images/dwn.png" alt="" style={{height:'40px', width:'40px',mixBlendMode:'color-burn',zIndex:10}} />
         </div>
         <div style={{display:'flex',flexDirection:'column',}}>
         <h4>Income</h4>
         <h4>${totals}</h4>
         </div>
         </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
        <div style={{display:'flex',justifyContent:'center',padding:'5px',borderRadius:'10px',backgroundColor:'grey',alignItems:'center',width:'50%'}}>
          <h3>Balance: ${balance}</h3>
          </div>
        </div>
        </div>
      
        </div>
      
    </>
  );
};

export default Head;
