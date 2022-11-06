import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import styles from "./App.module.scss";
import {HeaderWrapper} from "./components/Wrappers/HeaderWrapper";
import {MainView} from "./views/MainView/MainView";
import {NotFoundView} from "./views/NotFoundView/NotFoundView";

const App = () => {
    return (
        <div className={styles.App}>
            <HeaderWrapper/>
            <div className={styles.mainContainer}>
                <Routes>
                    <Route path="/" element={<MainView/>}/>
                    <Route path="*" element={<NotFoundView/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
