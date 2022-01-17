
export const A = ({ href, children }) => {
    const path = href === undefined ? "#" : href;
    return (<a href={path}>{children}</a>);
}
