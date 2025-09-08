import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoclick =()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("converted to lowercase", "success");
  }
  const handleClearclick =()=>{
    let newText ='';
    setText(newText)
    props.showAlert("clear text", "success");
}
    const handleOnchange =(event)=>{
        console.log("On change");
        setText(event.target.value);

    }
     const handleCopytext = () => {
       navigator.clipboard.writeText(text);
      //  alert("Text copied to clipboard!");
      props.showAlert("copied to clickboard", "success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("remove extra spaces", "success");
}


    const [text, setText] = useState('');
    // text ="new text";  //wrong way to change the state
    //  setText("new text"); //correct way to change the state
  return (
    <>
  <div className="container" style= {{color: props.mode==='dark'?'white':'#042743'}} >
    <h1 className= 'mb-2'>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="from-control" value={text} onChange={handleOnchange}   style= {{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}  id="mybox" rows={10} cols={170}></textarea>
     

    </div>
    <button disabled = {text.length ===0} style={{ backgroundColor: "#007bff", color: "white" }} className="btn btn-primary mx-1 my-1" onClick= {handleUpclick}> Uppercase </button>
    <button disabled = {text.length ===0} style={{ backgroundColor: "green", color: "white" }}  className="btn btn-primary mx-1 my-1" onClick= {handleLoclick}> Lowercase</button>
    <button disabled = {text.length ===0} style={{ backgroundColor: "red", color: "white" }}  className="btn btn-primary mx-1 my-1" onClick= {handleClearclick}>ClearText</button>
    <button disabled = {text.length ===0} style={{ backgroundColor: "red", color: "white" }}  className="btn btn-primary mx-1 my-1" onClick= {handleCopytext}>CopyText</button>
    <button disabled = {text.length ===0} style={{ backgroundColor: "red", color: "white" }}  className="btn btn-primary mx-1 my-1" onClick= { handleExtraSpaces}>Remove extraSpaces</button>
  </div>
  <div className="container my-3" style= {{color: props.mode==='dark'?'white':'#042743'}} >
    <h2>Your text summary</h2>
    {/* <p>{text.split(" ").length} words and {text.length} characters</p> will over-count words when there are extra spaces. A more accurate way: */}
    <p>{text.trim().split(/\s+/).filter((element) => element.length !== 0).length} word and  {text.length} characters</p>

    {/* <p>{0.008 * text.split(" ").length} minutes read</p> */}
    <p>{0.008 * text.trim().split(/\s+/).filter((element) => element.length !== 0).length} minutes read</p>

    <h2>Preview</h2>
    <p>{text.length >0?text:"Nothing to previwe!"}</p>


  </div>
  </>
  )
}
