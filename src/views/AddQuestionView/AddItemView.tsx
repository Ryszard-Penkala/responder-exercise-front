import styles from './AddItemView.module.scss'
import React, {FormEvent, useState} from "react";
import {SubmitButton} from "../../components/Buttons/SubmitButton/SubmitButton";
import {Link} from "react-router-dom";


export const AddItemView  = () => {

    const [itemCreated, setItemCreated] = useState(false);

    const [itemData, setItemData] = useState({
        author: '',
        summary: '',
    })

    const updateItemData = (key: string, value: string) => {
        setItemData(questionData => ({
            ...questionData,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault()
        const res = await fetch('http://localhost:3001/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
        });
        const data = await res.json();
        setItemCreated(true);

    }

    return (
        <>
            {itemCreated
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