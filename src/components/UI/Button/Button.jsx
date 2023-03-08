import styles from './Button.module.css'

const Button = (props) => {
    return (
        <button
            className={styles.button}
            type={props.type}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    )
}

export default Button;