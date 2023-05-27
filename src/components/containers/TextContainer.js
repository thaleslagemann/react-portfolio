import "./TextContainer.css"

const TextContainer = (props) => {
    const classes = "text_container " + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
};

export default TextContainer;