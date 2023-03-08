import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Icons from '../UI/Icons/Icons';

const Header = (props) => {

    const logoutHandler = () => {
        props.onLogout();
    };

    return (
        <header className={styles.header}>
            <h1>Simple Hotel Check</h1>
            <Link to='/login' onClick={logoutHandler} className={styles['header__sign-out']}>Выйти
                <Icons
                    name='sign-out'
                    size='24'
                    color='transparent'
                />
            </Link>
        </header>
    );
};

export default Header;