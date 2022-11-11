import styles from "./ActionButton.module.scss"
import React from "react";
import {useNavigate} from "react-router-dom";

interface Props {
    buttonText: string;
    buttonType?: 'submit';
    httpBELink: string;
    answerId: string;
    httpMethod: string;
}

export const ActionButton: React.FC<Props> = ({buttonText, buttonType, httpBELink, httpMethod, answerId}) => {

    const navigate = useNavigate();

    const navigateToDeletedItemView = () => {
        navigate(`./answers/${answerId}/deleted`, {replace: true});
    }

    const handleClick = async (httpBELink: string, httpMethod: string) => {
        const data = await fetch(`${httpBELink}`, {
            method: httpMethod,
        })
        console.log({data})
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