import blogDtup from "../axios/config"

import { useState } from "react"

import { useNavigate } from "react-router-dom"

import "./NewPost.css"

const NewPost = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = {title, body, userId: 1};

    await blogDtup.post("/posts", {
      body: post,
    })

    navigate("/");
  }

  return (
    <div className="new-post">
      <h2>Escreva um novo post!</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título do post</label>
          <input type="text" name="title" id="title" placeholder="Escreva o título do post" onChange={(e) => setTitle(e.target.value)}/>  
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" placeholder="Digite o conteúdo do seu post" onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" value="Enviar post" className="btn-enviar" />
      </form>
    </div>
  )
}

export default NewPost