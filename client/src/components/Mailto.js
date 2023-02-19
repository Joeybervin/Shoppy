export default function Mailto({ email, ...props }) {
    return (
        <a href={`mailto:${email}`}>
            {props.children}
        </a>
    );
}