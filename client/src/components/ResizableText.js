

function ResizableText({ text, maxChars }) {

    return (
        <div  style={{ display: 'inline-block' }}>
            {text.substring(0, maxChars)}
            {text.length > maxChars && '...'}
        </div>
    );
}

export { ResizableText };


