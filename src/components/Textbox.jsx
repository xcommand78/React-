import React, { useState } from 'react';

let TextBox = () => {
    const [text, setText] = useState("Enter the data in it");
    const [wrodCount, words] = useState(text.length)
    const [length, setLength] = useState(text.length); // Use state to track length

    const Change = (event) => {
        console.log('change function got executed');
        const newText = event.target.value;
        const wordCount = newText.split(" ").filter(word => word.trim() !== "").length;
        setText(newText);
        words(wordCount);
        setLength(newText.length); // Update length when text changes
    };

    const Uppercase = () => {
        console.log("Uppercase success");
        const newText = text.toUpperCase();
        setText(newText);
        setLength(newText.length); // Update length after transformation
    };

    const Lowercase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        setLength(newText.length); // Update length after transformation
    };

    const colorRed = () => {
        const textArea = document.getElementById("Text");
        textArea.style.color = "red";  // Directly manipulate the color of the textarea text
    };

    const clearText = () => {
        setText('');
        words(0);
        setLength(0); // Fix to update length properly when text is cleared
    };
    //save file
    const handleSaveFile = () => {
        const savetext = text;
        const blob = new Blob([savetext], { type: 'text/plain' }); // Create a Blob with text
        const url = URL.createObjectURL(blob); // Create a temporary URL for the Blob
        
        // Create a temporary anchor element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'example.txt'; // Specify the file name
        link.click(); // Trigger the download
        
        // Cleanup the URL after download is initiated
        URL.revokeObjectURL(url);
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100"> {/* Flexbox for centering */}
            <div className="mb-3 w-50"> {/* Container for TextBox and buttons, w-50 for width */}
                <label htmlFor="Text" className="form-label">Text Box</label>
                <div className="col-12"> {/* Full width for textarea */}
                    <textarea
                        className="form-control"
                        name="Text"
                        id="Text"
                        rows="8"
                        onChange={Change}
                        value={text}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-around  mt-2"> {/* Buttons in a flex container with gap */}
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={Uppercase}
                    >
                        Uppercase
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={Lowercase}
                    >
                        Lowercase
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={colorRed}
                    >
                        Color: Red
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={clearText}
                    >
                        Clear
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSaveFile}
                    >
                        Save file
                    </button>
                </div>
                <div className="mt-3">
                    <strong>Total words {wrodCount} | Total Length(with spaces): </strong>{length}
                </div>
                <div className='container'>
                    <h2>Text Preview</h2>
                    {/* Preserve whitespace formatting */}
                    <p style={{ whiteSpace: 'pre-wrap', height: '400px', overflowY: 'scroll' }}>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default TextBox;
