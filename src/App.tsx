import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import styles from "./App.module.scss";
import {HeaderWrapper} from "./components/Wrappers/HeaderWrapper";
import { AllQuestionsView } from './views/AllQuestionsView/AllQuestionsView';
import {MainView} from "./views/MainView/MainView";
import {NotFoundView} from "./views/NotFoundView/NotFoundView";
import {SingleQuestionView} from "./views/SingleQuestionView/SingleQuestionView";
import {DeletedAnswerView} from "./views/DeletedAnswerView/DeletedAnswerView";

const App = () => {
    return (
        <div className={styles.App}>
            <HeaderWrapper/>
            <div className={styles.mainContainer}>
                <Routes>
                    <Route path="/" element={<MainView/>}/>
                    <Route path="/questions" element={<AllQuestionsView/>}/>
                    <Route path="/questions/:questionId" element={<SingleQuestionView/>}/>
                    <Route path="/questions/:questionId/answers/:answerId/deleted" element={<DeletedAnswerView/>}/>
                    <Route path="*" element={<NotFoundView/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
