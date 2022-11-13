import styles from './AddAnswerView.module.scss'
import React, {FormEvent, useState} from "react";
import {SubmitButton} from "../../components/Buttons/SubmitButton/SubmitButton";
import {useParams} from "react-router-dom";


export const AddAnswerView  = () => {
    const {questionId} = useParams();

    const [itemCreated, setItemCreated] = useState(false);

    const [itemData, setItemData] = useState({
        author: '',
        summary: '',
        questionId: ''
    })

    const updateItemData = (key: string, value: string) => {
        setItemData(questionData => ({
            ...questionData,
            [key]: value,
            questionId: String(questionId),
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3001/questions/${questionId}/answers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
        });
        const data = await res.json();
        setItemCreated(true);
        return data

    }

    return (
        <>
            {itemCreated
                ? <h2>Answer added. You will find it in <a href={`http://localhost:3000/questions/${questionId}`}>Question Tab</a></h2>
                : <form onSubmit={sendForm} className={styles.formContainer}>
                    <div className={styles.formTitle}>
                        Add Answer
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            Author
                            <input
                                type="text"
                                name='author'
                                className={styles.formInput}
                                placeholder='Author'
                                value={itemData.author}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemData("author", e.target.value)}
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
                                value={itemData.summary}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemData("summary", e.target.value)}
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