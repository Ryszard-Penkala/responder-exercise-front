import styles from './SingleTaskTable.module.scss';
import {getSingleQuestionWithAnswersResponse} from "../../types/types";
import {AnswersTableRow} from "../AnswersTableRow/AnswersTableRow";

interface Props {
    singleQuestion: getSingleQuestionWithAnswersResponse ;
}


export const SingleTaskTable = (props: Props) => {

    return (
        <>
            <table className={styles.singleQuestionTable}>
                <thead>
                <tr>
                    <th>Author</th>
                    <th>Summary</th>
                    <th>Question Id</th>
                </tr>
                </thead>
                <tbody>
                {
                    <tr className={styles.questionTableRow}>
                        <td>{props.singleQuestion.author}</td>
                        <td>{props.singleQuestion.summary}</td>
                        <td>{props.singleQuestion.id}</td>
                    </tr>
                }
                </tbody>
            </table>

            <section className={styles.answersHeaderOne}>
                <h1>
                    Answers
                </h1>
            </section>

            {props.singleQuestion.answers.length === 0
                ? <div className={styles.noQuestions}>No answers provided yet</div>
                : <table className={styles.AnswersTable}>
                    <thead>
                    <tr>
                        <th>Author</th>
                        <th>Summary</th>
                        <th>Answer Id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.singleQuestion.answers.map(answer => (
                            <AnswersTableRow
                                key={answer.id}
                                answer={answer}
                                questionId = {props.singleQuestion.id}
                            />
                        ))
                    }
                    </tbody>
                </table>}
        </>



    )
}