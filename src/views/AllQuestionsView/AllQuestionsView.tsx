import {useEffect, useState} from "react";
import {getAllQuestionsWithAnswersResponse} from "../../types/types";
import {Spinner} from "../../common/Spinner/Spinner";
import styles from "./AllQuestionsView.module.scss"
import {AllQuestionsTable} from "../../components/AllTasksTable/AllQuestionsTable";
import {apiUrl} from "../../config/api";

export const AllQuestionsView = () => {

    const [loadingQuestions, setLoadingQuestions] = useState<getAllQuestionsWithAnswersResponse[] | null>(null);

    const fetchQuestionsWithAnswers = async () :Promise<void>=> {
        setLoadingQuestions(null);
        const response = await fetch(`${apiUrl}/questions/`);
        const data = await response.json();
        await setLoadingQuestions(data);
    }

    useEffect(()=>{
        fetchQuestionsWithAnswers()
            .catch(console.error);
    }, []);

    if(loadingQuestions === null) {
        return <Spinner/>
    }

    return (
        <section className={styles.allQuestionsSection}>
            <h1 className={styles.headerOne}>AllQuestionsView</h1>
            <AllQuestionsTable allQuestionsList = {loadingQuestions}/>
        </section>
    )
}