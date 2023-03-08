import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin, userLogout } from "../redux/actions/actionCreator";

import './App.css';

import EntryForm from './EntryForm/EntryForm';
import AppWindow from './AppWindow/AppWindow';

function App() {
    const login = useSelector(store => store?.login?.isLogin);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedLoginInfo = localStorage.getItem('isLoggedIn');

        if (storedLoginInfo === '1') {
            dispatch(userLogin());
        }
    }, []);

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        dispatch(userLogin());
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        dispatch(userLogout());
    };

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={!login ? <EntryForm onLogin={loginHandler}/> : <Navigate to="/" />} />
                    <Route path="/" element={login ? <AppWindow onLogout={logoutHandler}/> : <Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
