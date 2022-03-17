import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Name of the project" name="name" placeholder="Input the name of the project" />

            <Input type="text" text="Project Budget" name="budget" placeholder="Input the budget of the project" />

          <Select name="category_id" text="Select the category"/>
           <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm