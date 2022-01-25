import React , {useState} from "react";

export default function TexthtmlForm(props) {
    const convertUp = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        setAlert("Converted to UpperCase")
        setTimeout(() => {
          setAlert(null)
        }, 1500);
    }

    const convertLo = () =>{
        let newText = text.toLowerCase()
        setText(newText)
        setAlert("Converted to LowerCase")
        setTimeout(() => {
          setAlert(null)
        }, 1500);
    }

    const convertRev = () =>{
        let newText = text.split(' ').reverse().join(' ')
        setText(newText)
        setAlert("Text Reversed")
        setTimeout(() => {
          setAlert(null)
        }, 1500);
    }

    const convertCopy = () =>{
        let textCopy = document.getElementById('myBox')
        textCopy.select()
        navigator.clipboard.writeText(textCopy.value)
        setAlert("Text Copied!")
        setTimeout(() => {
          setAlert(null)
        }, 1500);
    }
    const convertRemoveWhiteSpaces = () =>{
        const newText = text.replace(/\s+/g,' ').trim()
        setText(newText)
        setAlert("Extra Spaces Removed ")
        setTimeout(() => {
          setAlert(null)
        }, 1500);
    }

    const convertClear = () =>{
        setText('')
        setAlert("Text Cleared")
        setTimeout(() => {
          setAlert(null)
        }, 1500);
    }

    const onChange = (event) => {
        setText(event.target.value)
        setTimeout(() => {
          setAlert(null)
        }, 1500);
    }
    const [text,setText] = useState("Enter or Paste the Text!")
    const [alert, setAlert] = useState(null);

  return (
    <>
    <div class="alert alert-success alert-dismissible fade show" role="alert" style={{backgroundColor:'white',border:'none',height:'40px'}}>
      <strong>{alert}</strong>
    </div>
    
    <div className="container p-3 my-3 bg-dark text-white">
      <div className="mb-3">
      <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value ={text}
          onChange= {onChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={convertUp}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={convertLo}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={convertRev}>Reverse the text</button>
      <button className="btn btn-primary mx-2" onClick={convertCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={convertRemoveWhiteSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={convertClear}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Text Summary</h2>
    
      {text.split(' ').filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters
    </div>
    </>
  );
}
