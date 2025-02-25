import blogDtup from "../axios/config"

import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import "./EditPost.css"

const EditPost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const { id } = useParams();


  return (
    <div className="edit-post">
      <h2>Editando post: {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Editar título do post</label>
          <input type="text" name="title" id="title" placeholder="Escreva o novo título do post" onChange={(e) => setTitle(e.target.value)}/>  
        </div>
        <div className="form-control">
          <label htmlFor="body">Editar conteúdo:</label>
          <textarea name="body" id="body" placeholder="Edite seu post!" onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" value="Confirmar edição de post" className="btn-edit-enviar" />
      </form>
    </div>
  )
}

export default EditPost