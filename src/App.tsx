import React from 'react';
import {Navigate, Route, Routes, useParams} from 'react-router-dom';
import styles from "./App.module.scss";
import {HeaderWrapper} from "./components/Wrappers/HeaderWrapper";
import { AllQuestionsView } from './views/AllQuestionsView/AllQuestionsView';
import {MainView} from "./views/MainView/MainView";
import {NotFoundView} from "./views/NotFoundView/NotFoundView";
import {SingleQuestionView} from "./views/SingleQuestionView/SingleQuestionView";
import {DeletedAnswerView} from "./views/DeletedAnswerView/DeletedAnswerView";
import {DeletedQuestionView} from "./views/DeletedQuestionView/DeletedQuestionView";
import {AddItemView} from "./views/AddQuestionView/AddItemView";
import {AddAnswerView} from "./views/AddAnswerView/AddAnswerView";


const App = () => {

    return (
        <div className={styles.App}>
            <HeaderWrapper/>
            <div className={styles.mainContainer}>
                <Routes>
                    <Route path="/" element={<MainView/>}/>
                    <Route path="/questions" element={<AllQuestionsView/>}/>
                    <Route path="/questions/add" element={<AddItemView/>}/>
                    <Route path="/questions/:questionId" element={<SingleQuestionView/>}/>
                    <Route path="/questions/:questionId/deleted" element={<DeletedQuestionView/>}/>
                    <Route path="/questions/:questionId/answers/add" element={<AddAnswerView/>}/>
                    <Route path="/questions/:questionId/answers/:answerId/deleted" element={<DeletedAnswerView/>}/>
                    <Route path="*" element={<NotFoundView/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
