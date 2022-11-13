import styles from './SubmitButton.module.scss';
import React from "react";

interface Props {
    buttonText: string
}

export const SubmitButton : React.FC<Props> = ({buttonText}) => {
    return(
        <button type='submit' className={styles.actionButton}>
            {buttonText}
        </button>
    )
}