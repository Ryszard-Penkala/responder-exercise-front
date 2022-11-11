import {useNavigate, useParams} from "react-router-dom";

export const DeletedAnswerView = () => {
    const {questionId, answerId} = useParams()


    return (
        <>
            <div>
                Answer {answerId} has been deleted
            </div>
            <div>
                <a href={`http://localhost:3000/questions/${questionId}`} target="_blank" rel="noreferrer">Return to chosen question</a>
            </div>
        </>
    )
}