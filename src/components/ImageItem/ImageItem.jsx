const ImageItem = (props) => {

    return (
        <li>
            <picture>
                <img
                    key={props.id}
                    src={props.common}
                    srcSet={`${props.retina} 2x`}
                    alt={props.description}
                />
            </picture>
        </li>
    );
};

export default ImageItem;