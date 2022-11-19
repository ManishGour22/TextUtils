import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
            let newTxt= text.toUpperCase();
            setText(newTxt)
            props.showAlert("Converted to UpperCase!" , "success");
    }
   const handleLoClick = () => {
        let newTxt= text.toLowerCase();
        setText(newTxt)
        props.showAlert("Converted to LowerCase!" , "success");
}
const handleToclear = () => {
    let newTxt= '';
    setText(newTxt)
    props.showAlert(" Text has been cleared!" , "success");
}
    const handleOnChange = (event) =>{
            setText(event.target.value);
              
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied!" , "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed!" , "success");

    }
    const [text, setText] = useState('');
    return ( 
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2 className = "mb-3">{props.heading} </h2>
            <div className="mb-3">
            <textarea className="form-control" style = {{backgroundColor: props.mode==='dark'?'#13466e':'white' ,color:  props.mode==='dark'?'white':'gray'}} id="myBox"value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToclear}>Clear Text</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
            <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
