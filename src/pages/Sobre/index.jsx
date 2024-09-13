import styles from './Sobre.module.css'
import tales from './images/tales.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={tales} alt='Eu' className={styles.tales}></img>
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Tales Renan</span> <br />
                        <strong>Dev Front End</strong></p>

                    <p>Estou em busca de um trabalho na area!!</p>

                    <p>Sou apaixonado por transformar projetos em realidade</p>

                    <p>Me especializando em criar aplicações intuiticas e focadas na experiencia do usuario!!</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Tecnologias</h3>
                <div className={styles.icones}>
                    <p><img src={html} alt='Icone do HTML'/>HTML</p>
                    <p><img src={css} alt='Icone do Css'/>CSS</p>
                    <p><img src={js} alt='Icone do JS'/>JS</p>
                    <p><img src={react} alt='Icone do REACT'/>REACT</p>
                    <p><img src={sql} alt='Icone do SQL'/>SQL</p>
                </div>
            </div>
        </section>
    )
}

export default Sobre
