
export const A = ({ href, onClick, onMouseOver, children }) => {
    const path = href === undefined ? "#" : href;
    return (
        <a href={path}
            onClick={onClick}
            onMouseOver={onMouseOver}>
            {children}
        </a>
    );
}
