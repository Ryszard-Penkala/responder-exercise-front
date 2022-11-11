import styles from "./ActionButton.module.scss"
import React from "react";
import {useNavigate} from "react-router-dom";

interface Props {
    buttonText: string;
    buttonType?: 'submit';
    httpBELink: string;
    answerId?: string;
    questionId?: string;
    httpMethod: string;
}

export const ActionButton: React.FC<Props> = ({buttonText, buttonType, httpBELink, httpMethod, answerId, questionId}) => {

    const navigate = useNavigate();

    const navigateToDeletedItemView = () => {
        if (answerId) {
            return navigate(`./answers/${answerId}/deleted`, {replace: false})
        } else {
            return navigate(`./${questionId}/deleted`, {replace: false});
        }
    }

    const handleClick = async (httpBELink: string, httpMethod: string) => {
        const data = await fetch(`${httpBELink}`, {
            method: httpMethod,
        })
        const json = await data.json();
        navigateToDeletedItemView()
        return json;
    }

    return(
        <button type={buttonType} className={styles.actionButton} onClick={ async() => await handleClick(httpBELink, httpMethod)}>
            {buttonText}
        </button>
    )
}