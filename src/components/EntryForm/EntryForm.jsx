import { MIN_PASSWORD_LENGTH, REG_EXP_CYRILLIC } from '../../utils/utils';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './EntryForm.module.css';

import Button from '../UI/Button/Button';

const EntryForm = (props) => {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const [isEmailBlured, setIsEmailBlured] = useState(false);
    const [isPasswordBlured, setIsPasswordBlured] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormValid(
                (inputEmail.includes('@') && inputEmail.includes('.')) &&
                ((inputPassword.trim().length > MIN_PASSWORD_LENGTH) && (!inputPassword.match(REG_EXP_CYRILLIC)))
            );
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [inputEmail, inputPassword]);

    const emailChangeHandler = (evt) => {
        setInputEmail(evt.target.value);
    };

    const passwordChangeHandler = (evt) => {
        setInputPassword(evt.target.value);
    };

    const checkEmailBlur = () => {
        setEmailIsValid(inputEmail.includes('@') && inputEmail.includes('.'));
        setIsEmailBlured(true);
    };

    const checkPasswordBlur = () => {
        setPasswordIsValid(!inputPassword.match(REG_EXP_CYRILLIC) && inputPassword.length > 7);
        setIsPasswordBlured(true);
    };

    const submitHandler = (evt) => {
        evt.preventDefault();
        if (emailIsValid && passwordIsValid) {
            props.onLogin();
            navigate('/');
        }
    };

    return (
        <div className={styles['wrapper-entry-form']}>
            <form onSubmit={submitHandler} className={styles['entry-form']}>
                <span className={styles['entry-form__title']}>Simple Hotel Check</span>
                <label
                    className={`${(!emailIsValid && isEmailBlured) ? styles['field--invalid'] : ''}`}
                    data-invalid='Любая почта'>Логин
                    <input
                        onChange={emailChangeHandler}
                        onBlur={checkEmailBlur}
                        id='entry-login'
                        type='email'
                    />
                </label>
                <label
                    className={`${(!passwordIsValid && isPasswordBlured) ? styles['field--invalid'] : ''}`}
                    data-invalid='Минимум 8 символов, без кириллицы'>Пароль
                    <input
                        onChange={passwordChangeHandler}
                        onBlur={checkPasswordBlur}
                        id='entry-password'
                    />
                </label>
                    <Button type='submit' text='Войти'/>
            </form>
        </div>
    );
};

export default EntryForm;