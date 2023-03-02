

function ResizableText({ text, maxChars }) {

    return (
        <div  style={{ display: 'inline-block' }}>
            <p>{text.substring(0, maxChars)}
            {text.length > maxChars && '...'}</p>
        </div>
    );
}

export { ResizableText };


