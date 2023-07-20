
import styles from "./Greetings.module.css"
// import "./Greetings.css"
console.log(styles)

function Greetings(){
    return (
        <>
        <h1>React</h1>
        <h3 className={styles.App }>HELLO From Greetings</h3>
        <h2>{true?"Good Moring":"Good Night"}</h2>
        </>
    )
}

export default Greetings
// export  {Greetings}