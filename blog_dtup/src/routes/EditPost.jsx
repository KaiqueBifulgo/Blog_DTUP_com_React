import blogDtup from "../axios/config"

import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import "./NewPost.css"

const EditPost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const { id } = useParams();


  return (
    <div className="new-post">
      <h2>Editando {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título do post</label>
          <input type="text" name="title" id="title" placeholder="Escreva o título do post" onChange={(e) => setTitle(e.target.value)}/>  
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" placeholder="Edite seu post!" onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" value="Enviar post" className="btn-enviar" />
      </form>
    </div>
  )
}

export default EditPost