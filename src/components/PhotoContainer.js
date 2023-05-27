import "./PhotoContainer.css";

const PhotoContainer = (props) => {
    const classes = "photo_container__inner " + props.className;
    return (
        <div className="photo_container__outer">
            <div className={classes}>
                {props.children}
            </div>
            <div className="photo_container__name">
                {props.photo_subtitle}
            </div>
        </div>
    );
};

export default PhotoContainer;