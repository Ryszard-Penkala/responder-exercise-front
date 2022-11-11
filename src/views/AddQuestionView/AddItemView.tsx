import styles from './AddItemView.module.scss'
import React, {FormEvent, useState} from "react";
import {SubmitButton} from "../../components/Buttons/SubmitButton/SubmitButton";
import {Link} from "react-router-dom";

export const AddItemView = () => {

    const [questionCreated, setQuestionCreated] = useState(false);

    const [questionData, setQuestionData] = useState({
        author: '',
        summary: '',
    })

    const updateQuestionData = (key: string, value: string) => {
        setQuestionData(questionData => ({
            ...questionData,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3001/questions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(questionData),
        });
        const data = await res.json();
        setQuestionCreated(true);

    }

    return (
        <>
            {questionCreated
                ? <h2>Question created. You will find it in <Link to='/questions'>All Questions Tab</Link></h2>
                : <form onSubmit={sendForm} className={styles.formContainer}>
                    <div className={styles.formTitle}>
                        Add Question
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            Author
                            <input
                                type="text"
                                name='author'
                                className={styles.formInput}
                                placeholder='Author'
                                value={questionData.author}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateQuestionData("author", e.target.value)}
                            />
                        </label>

                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            Summary
                            <input
                                type="text"
                                name='summary'
                                className={styles.formInput}
                                placeholder='Summary'
                                value={questionData.summary}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateQuestionData("summary", e.target.value)}
                            />
                        </label>

                    </div>

                    <div className={styles.formFooter}>

                        <SubmitButton buttonText="Add"/>
                    </div>
                </form>

            }
        </>
    )
}