import styles from "./Greetings.module.css"

function Greetings(data){
    const {text}=data
    return <>
    <h3 className={styles.App}>{text}</h3>
    </>
}

export default Greetings