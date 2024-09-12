import styles from './Container.module.css'
/*children é uma props que serve com parametro, significa que vou colocar algo dentro dessa section mas isso quando eu importar ele nas paginas (vou colocar coisas dentro na propria pagina)*/
function Container({ children }){
    return(
        <section className={styles.container}>
            { children }
        </section>
    )
}

export default Container