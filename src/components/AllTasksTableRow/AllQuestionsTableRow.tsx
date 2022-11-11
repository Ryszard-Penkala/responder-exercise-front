import { NavLink } from "react-router-dom";
import { getAllQuestionsWithAnswersResponse } from "./../../types/types";
import styles from "./AllQuestionsTableRow.module.scss"

interface Props {
    question: getAllQuestionsWithAnswersResponse;
}

export const AllQuestionsTableRow = (props: Props) => {
    return (
        <tr className={styles.tableRow}>
            <td>{props.question.author}</td>
            <td>{props.question.summary}</td>
            <td><NavLink to={`./${props.question.id}`}>{props.question.id}</NavLink></td>
        </tr>
    )
}