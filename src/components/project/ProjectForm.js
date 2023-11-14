
import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import Projects from '../pages/Projects'

function ProjectForm({ btnText, handleSubmit, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProjects] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'content-type': "application/json",
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
          setCategories(data)
    })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProjects({ ...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProjects({ 
            ...project, 
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
        console.log(project)
    }



    return (
        <form onSubmit={submit} className={styles.form}>
           <Input 
           type="text"
           text="Nome do projeto"
           name="name"
           placeholder="Insira o nome do projeto"
           handleOnChange={handleChange}
           value={project.name ? project.name : ''}
            />
           <Input 
           type="number"
           text="Orçamento do Projeto"
           name="budget"
           placeholder="Insira o preço do projeto"
           handleOnChange={handleChange} 
           value={project.budget ? project.budget : ''}
           /> 
           <Select
           name="category_id"
           text="Selecione o orçamento total"
           options={categories}
           handleOnChange={handleCategory}
           value={project.category ? project.category.id : ''}
           />
           <SubmitButton text={btnText} />
           
        </form>
    )
}

export default ProjectForm