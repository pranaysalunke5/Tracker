import React, { useState , } from 'react'

const Form = ({setFormVisible , setHistory,history}) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("income")
    
const clickHandler = () => {
   const obj = {title,amount,type}
    setHistory([...history,obj])
    setTitle("")
    setAmount("")
    setType("income")
    setFormVisible(false)
}
   return (
    <>
    <div style={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'80%',display:'flex',flexDirection:'column',gap:'10px'   ,alignItems:'center',justifyContent:'center'}}>
     <h2>Add Expence</h2>
     <div style={{display:'flex',flexDirection:'column',gap:'8px',width:'100%'}}>
       <span className='span'>Title</span> 
       <input type="text" style={{padding:'12px',borderRadius:'8px'}} 
       onChange={(e)=> setTitle(e.target.value)}
       value={title} />
       <span className='span'>Amount</span> 
       <input type="number" style={{padding:'12px',borderRadius:'8px'}}
       onChange={(e)=>setAmount(e.target.value)}
       value={amount}/>

     </div>
     </div>
     <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'20px'}} >
     <div style={{width:'50%',display:'flex',flexDirection:'column',gap:'10px'}}>
       <span className='span'>Type</span> 
        <select style={{padding:'14px',borderRadius:'12px'}}
        onChange={(e) => setType(e.target.value)}
        value={type}>
            <option value="income">Income</option>
            <option value="expence">Expence</option>
        </select>
       
     </div>
     <div  style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
            <button style={{padding:'14px',borderRadius:'12px'}}
            onClick={()=> setFormVisible(false)}
            >Cancel</button>
            <button style={{padding:'14px',borderRadius:'12px'}}
            onClick={clickHandler}
            >Save</button>
        </div>
        </div>

    </div>
    
    
    </>
  )
}

export default Form
