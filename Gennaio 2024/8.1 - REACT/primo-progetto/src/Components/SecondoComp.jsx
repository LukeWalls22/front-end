
function ImageComponent (props) {
    return (
        <img src={props.source} alt={props.alternate} width={props.larg} />
    )
}

export default ImageComponent;