import styles from "./NotFoundView.module.scss";

export const NotFoundView = () => {
    return(
        <main className={styles.mainSection}>
            <h1>It's an empty space</h1>

            <h2>The page you are looking for is not existing (404 error)</h2>
        </main>
    )
}