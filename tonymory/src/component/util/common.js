
export const A = ({ href, content }) => {
    const path = href === undefined ? "#" : href;
    return (<a href={path}>{content}</a>);
}
