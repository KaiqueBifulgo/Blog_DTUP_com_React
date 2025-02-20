import blogDtup from "../axios/config"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

// ESTILOS
import "./Admin.css"

const Admin = () => {

  const [posts,SetPosts] = useState([]);

  const getPosts = async () => {
  
    try {
      
      const response = await blogDtup.get("/posts") 

      const data = response.data;

      SetPosts(data)

    } catch (error) {
      
      console.log(error)

    }
  }


  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="admin">
      <h1>Gerenciar e personalizar posts</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link className="edit-btn">Editar post</Link>
              <button className="delete-btn">Excluir post</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Admin