import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Creat New Project</h1>
            <p>Start your new project, later on add your services!</p>
            <ProjectForm btnText="Creat Project"/>
        </div>
    )
}

export default NewProject