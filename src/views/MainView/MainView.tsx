import styles from "./MainView.module.scss";
import {Button} from "../../components/Buttons/Button/Button";

export const MainView = () => {
    return (
        <main className={styles.mainSectionGroup}>
            <section className={styles.mainSectionHeader}>
                <h2>Welcome to the Question Application</h2>
            </section>
            <section className={styles.mainSectionParagraph}>
                Choose which action you would like to take
            </section>
            <section className={styles.mainSectionButtons}>
                <Button children = "All Questions Tab" link="/questions"/>
                <Button children = "Add Question" link="/questions/add"/>
            </section>
        </main>
    )
}