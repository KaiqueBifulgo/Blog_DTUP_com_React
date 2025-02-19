import blogDtup from "../axios/config"

import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

// Estilos
import "./Post.css"

const Post = () => {

    const {id} = useParams();

    const [post, setPost] = useState({})

    const getPost = async() => {
        try {
            
            const response = await blogDtup.get(`/posts/${id}`)

            const data = response.data

            setPost(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPost();
    }, [getPost])


  return (
    <div className="post-container">
        {!post.title ? (<p>Carregando....</p>) : 
        (<div className="post"> 
            <h2>{post.title}</h2> 
            <p>{post.body}</p>
        </div>) }
    </div>
  )
}

export default Post