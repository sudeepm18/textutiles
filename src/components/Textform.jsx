import React,{useState} from 'react'


export default function TextForm(props) {
     const[text,settext]=useState('')
    const handleupclick=()=>{
        let newText=text.toLocaleUpperCase();
        settext(newText)
    }
    const handlelowclick=()=>{
        let newText=text.toLowerCase();
        settext(newText)
    }
    const handleclear=()=>{
        let newText='';
        settext(newText)
    }
    const handleonchange=(e)=>{
        settext(e.target.value)
    }
   
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
  
</div>
<button className="btn btn-primary mx-2" onClick={handleupclick}>Conver to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowclick}>Conver to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleclear}>Clear</button>

    </div>
    <div className='container' >
        <h2>your text Summary</h2>
        <p>{text.split(' ').length} Words and {text.length} Characters</p>
        <p>Average { Number((0.65*text.length)/60).toFixed(2)} minutes Needed to read</p>
        <p>preview</p>
        <p>{text}</p>
    </div>
    </>
  )
}

