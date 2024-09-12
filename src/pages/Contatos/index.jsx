import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";





import styles from './Contatos.module.css';

function Contatos(){
    return(
        <>
        <Header/>
        <Container>
            <section className={styles.contatos}>
                <h2>Meus Contatos</h2>
                <h3>Aguardo o Contato</h3>
                <p>Para que possamos conversar mais sobre.</p>

                <div className={styles.icons}>
                    <a href='https://www.linkedin.com/in/tales-santos-6ba9a0214/' target='_blank' rel='noopener noreferrer'>
                      <CiLinkedin className={styles.icone}/>
                    </a>
                    <a href='mailto:talesr323@gmail.com' target='_blank' rel='noopener noreferrer'>
                     <IoIosMail className={styles.icone}/>
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=5518998064647' target='_blank' rel='noopener noreferrer'>
                      <FaWhatsapp  className={styles.icone}/>
                    </a>
                    <a href='https://github.com/talesr323' target='_blank' rel='noopener noreferrer'>
                        <FaGithub className={styles.icone}/>
                    </a>
                </div>     
            </section>
        </Container>
        <Footer/>
        </>
    )
}

export default Contatos
