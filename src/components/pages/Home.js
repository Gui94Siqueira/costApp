import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'
function Home() {
    return (
        <section className={styles.home_container}>
            <h1>bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
        </section>
    )
}

export default Home