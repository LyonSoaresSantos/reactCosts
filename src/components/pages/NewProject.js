import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        //intialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            }, body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                //redirect
                navigate('/projects', { state: { message: 'Project created with success!' } })
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Creat New Project</h1>
            <p>Start your new project, later on add your services!</p>
            <ProjectForm handleSubmit={createPost} btnText="Creat Project" />
        </div>
    )
}

export default NewProject