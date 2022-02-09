
export const A = ({ href, onClick, onMouseOver, children, className }) => {
    const path = href === undefined ? "#" : href;
    return (
        <a className={className} 
            href={path}
            onClick={onClick}
            onMouseOver={onMouseOver}>
            {children}
        </a>
    );
}
