import { useRef, useEffect } from 'react';

const ResizableText = ({ text, maxChars }) => {
    const textRef = useRef(null);

    useEffect(() => {
        function handleResize() {
            resizeText();
        }
        window.addEventListener('resize', handleResize);
        resizeText();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [textRef]);

    function resizeText() {
        const containerWidth = textRef.current.offsetWidth;
        const averageCharWidth = containerWidth / maxChars;
        const fontSize = Math.floor(containerWidth / averageCharWidth);
        textRef.current.style.fontSize = fontSize + 'px';
    }

    return (
        <div ref={textRef}>
            {text.substring(0, maxChars)}
            {text.length > maxChars && '...'}
        </div>
    );
}

export {ResizableText}