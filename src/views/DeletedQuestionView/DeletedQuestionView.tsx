import { useParams} from "react-router-dom";

export const DeletedQuestionView = () => {
    const {questionId} = useParams()


    return (
        <>
            <div>
                Question {questionId} has been deleted
            </div>
            <div>
                <a href={`http://localhost:3000/questions`} rel="noreferrer">Return to All Questions Tab</a>
            </div>
        </>
    )
}