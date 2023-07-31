import React,{useState} from 'react'

export default function TextForms(props) {
    const[text, setText] = useState('Enter Text Here')
   
    const toUper = () =>{
        let a = text.toUpperCase();
        setText(a);
        props.showAlert("UpperCase is Done", "success");
    }
    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const toLower = () => {
        let a = text.toLowerCase();
        setText(a);
        props.showAlert("LowerCase is Done", "success");
    }
  return (
   
    <>
    
    <div className={` container text-${props.bText}`}>

        <div className=" container my-5 ">
          <h2 claasName="">Enter Text Here</h2>
          <textarea className="form-control" value={text} onChange={handleOnchange} aria-label="With textarea">{props.text}</textarea>
        </div>
        <button type="button" className="text-start btn btn-primary mx-3 my-3" onClick={toUper}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary" onClick={toLower}>Convert to LowerCase</button>
        <h3>Your Text Summery</h3>
        <p>Word:{text.split(" ").length}, Character: {text.length}</p>
        <p><b>Preview</b></p>
        <p>{text}</p>
      </div></>

  )
}
