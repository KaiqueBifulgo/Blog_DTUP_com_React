import "./NewPost.css"

const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Escreva um novo post!</h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Título do post</label>
          <input type="text" name="title" id="title" placeholder="Escreva o título do post" />  
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" placeholder="Digite o conteúdo do seu post"></textarea>
        </div>
        <input type="submit" value="Enviar post" className="btn-enviar" />
      </form>
    </div>
  )
}

export default NewPost