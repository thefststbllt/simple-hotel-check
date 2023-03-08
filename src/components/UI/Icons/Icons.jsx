import IconsSVG from '../../../assets/icons/sprite.svg';

const Icons = ({name, color, size, opacity, className}) => {
    return (
        <svg className={`icon icon-${name} ${className}`}
             fill={color}
             opacity={opacity}
             width={size}
             height={size}>>
            <use xlinkHref={`${IconsSVG}#${name}`} />
        </svg>
    );
};

export default Icons;