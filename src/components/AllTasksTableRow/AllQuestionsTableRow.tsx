import { NavLink } from "react-router-dom";
import { getAllQuestionsWithAnswersResponse } from "./../../types/types";
import styles from "./AllQuestionsTableRow.module.scss"
import {ActionButton} from "../Buttons/ActionButton/ActionButton";

interface Props {
    question: getAllQuestionsWithAnswersResponse;
}

export const AllQuestionsTableRow = (props: Props) => {
    return (
        <tr className={styles.tableRow}>
            <td>{props.question.author}</td>
            <td>{props.question.summary}</td>
            <td><NavLink to={`./${props.question.id}`} className={styles.tableLink}>{props.question.id}</NavLink></td>
            <td><ActionButton buttonText="DELETE" httpBELink={`http://localhost:3001/questions/${props.question.id}`} httpMethod={"DELETE"} questionId={props.question.id}/></td>
        </tr>
    )
}