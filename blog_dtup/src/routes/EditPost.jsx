import blogDtup from "../axios/config"

import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import "./EditPost.css"

const EditPost = () => {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const { id } = useParams();


    const getPosts = async () => {
  
    try {
      
      const response = await blogDtup.get(`/posts/${id}`) 

      const data = response.data;

      setTitle(data.title)
      setBody(data.body)

    } catch (error) {
      
      console.log(error)

    }
  }

  useEffect(() => {
    getPosts();
  }, [])


  const editPost = async (e) => {
    e.preventDefault();

    const post = {title, body, userId: 1}

    await blogDtup.put(`/posts/${id}`, {
      body: post
    })
  }



  return (
    <div className="edit-post">
      <h2>Editando post: {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Editar título do post</label>
          <input type="text" name="title" id="title" placeholder="Escreva o novo título do post" onChange={(e) => setTitle(e.target.value)} value={title || ""}/>  
        </div>
        <div className="form-control">
          <label htmlFor="body">Editar conteúdo:</label>
          <textarea name="body" id="body" placeholder="Edite seu post!" onChange={(e) => setBody(e.target.value)} value={body || ""}></textarea>
        </div>
        <input type="submit" value="Confirmar edição de post" className="btn-edit-enviar" />
      </form>
    </div>
  )
}

export default EditPost