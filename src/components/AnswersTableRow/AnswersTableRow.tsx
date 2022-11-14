import styles from './AnswersTableRow.module.scss'
import {answerInterface} from "../../types/types";
import {ActionButton} from "../Buttons/ActionButton/ActionButton";
import {apiUrl} from "../../config/api";

interface Props {
    answer: answerInterface;
    questionId: string;
}



export const AnswersTableRow = (props: Props ) => {
    return (
        <tr className={styles.tableRow}>
            <td>{props.answer.author}</td>
            <td>{props.answer.summary}</td>
            <td>{props.answer.id}</td>
            <td><ActionButton buttonText="DELETE" httpBELink={`${apiUrl}/questions/${props.questionId}/answers/${props.answer.id}`} httpMethod={"DELETE"} answerId={props.answer.id}/></td>
        </tr>
    )
}