import { useParams} from "react-router-dom";
import styles from "../DeletedAnswerView/DeletedAnswerView.module.scss";
import React from "react";

export const DeletedQuestionView = () => {
    const {questionId} = useParams()


    return (
        <main className={styles.mainSection}>
            <h2>Question {questionId} has been deleted</h2>
            <h3>
                <a href={`https://qapp.networkmanager.pl/questions`} rel="noreferrer">Return to All Questions Tab</a>
            </h3>
        </main>
    )
}