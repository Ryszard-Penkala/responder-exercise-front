import styles from './DeletedAnswerView.module.scss'
import {useParams} from "react-router-dom";
import React from "react";

export const DeletedAnswerView = () => {
    const {questionId, answerId} = useParams()


    return (
        <main className={styles.mainSection}>
            <h2>Answer {answerId} has been deleted</h2>
            <h3>
                <a href={`https://qapp.networkmanager.pl/questions/${questionId}`} rel="noreferrer">Return to chosen question</a>
            </h3>
        </main>
    )
}