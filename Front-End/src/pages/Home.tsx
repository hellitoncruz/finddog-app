import '../styles.scss'


function Home() {

  return (
    <div className="container" style={{ textAlign: "center", padding: "20px" }}>
    <h1>Ajude um Animalzinho 💙</h1>
    <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
      Se você deseja adotar um cãozinho em situação de rua, contribuir para sua alimentação 
      ou ajudar a encontrar um lar para um animal resgatado, você está no lugar certo!  
      Aqui, você pode conhecer animais que precisam de um lar ou cadastrar um novo amigo para adoção.  
      Faça a diferença na vida desses bichinhos! 🐶🐾
    </p>
  
    <div style={{ marginTop: "20px" }}>
      <a href="/abandonados" 
         target="_blank" 
         rel="noopener noreferrer"
         style={{
           display: "inline-block",
           textDecoration: "none",
           padding: "10px 20px",
           color: "#fff",
           backgroundColor: "#007bff",
           borderRadius: "5px",
           marginRight: "10px"
         }}>
        🏡 Ver animais para adoção
      </a>
  
      <a href="/cadastro" 
         target="_blank" 
         rel="noopener noreferrer"
         style={{
           display: "inline-block",
           textDecoration: "none",
           padding: "10px 20px",
           color: "#fff",
           backgroundColor: "#28a745",
           borderRadius: "5px"
         }}>
        ➕ Cadastrar um animal
      </a>
    </div>
  </div>
  
  )
}

export default Home
