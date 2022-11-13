import styles from "./AllQuestionsTable.module.scss"
import { getAllQuestionsWithAnswersResponse } from "./../../types/types"
import { AllQuestionsTableRow } from "../AllTasksTableRow/AllQuestionsTableRow";

interface Props {
    allQuestionsList: getAllQuestionsWithAnswersResponse[];
}

export const AllQuestionsTable = (props: Props) => {
    return  (
        <table className={styles.allQuestionsTable}>
            <thead>
            <tr>
                <th>Author</th>
                <th>Summary</th>
                <th>Question Id</th>
            </tr>
            </thead>
            <tbody>
            {
                props.allQuestionsList.map(question => (
                    <AllQuestionsTableRow
                        key={question.id}
                        question={question}
                    />
                ))
            }
            </tbody>
        </table>
    )
}