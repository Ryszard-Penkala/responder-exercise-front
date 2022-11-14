import styles from "./SingleQuestionView.module.scss"
import {useEffect, useState} from "react";
import {getSingleQuestionWithAnswersResponse} from "../../types/types";
import {Spinner} from "../../common/Spinner/Spinner";
import {useParams} from "react-router-dom";
import {SingleTaskTable} from "../../components/SingleTaskTable/SingleTaskTable";
import {Button} from "../../components/Buttons/Button/Button";
import {apiUrl} from "../../config/api";

export const SingleQuestionView = () =>{
    const {questionId} = useParams()

    const [loadingQuestion, setLoadingQuestion] = useState<getSingleQuestionWithAnswersResponse | null>(null);

    const fetchQuestionWithAnswers = async () :Promise<void>=> {
        setLoadingQuestion(null);
        const response = await fetch(`${apiUrl}/questions/${questionId}`);
        const data = await response.json();
        await setLoadingQuestion(data);
    }

    useEffect(()=>{
        fetchQuestionWithAnswers()
            .catch(console.error);
    }, []);

    if(loadingQuestion === null) {
        return <Spinner/>
    }

    return (
        <main className={styles.mainSectionGroup}>
            <section className={styles.singleQuestionSection}>
                <h1 className={styles.headerOne}>SingleQuestionView</h1>
                <SingleTaskTable singleQuestion = {loadingQuestion}/>
            </section>
            <section className={styles.mainSectionButtons}>
                <Button children = "Add Answer" link="./answers/add"/>
            </section>
        </main>
    )
}