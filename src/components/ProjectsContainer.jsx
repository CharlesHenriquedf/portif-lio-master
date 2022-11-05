
import "../styles/components/informationcontainer.sass";


function ProjectsContainer() {
  return (
    <div>
      <section className="projects-container">
        <h2>Projeto Nodejs e Mongodb</h2>
        <p>
          Projeto de crud ultilizando NodeJs e Mongodb com Atlas para colocar o banco em cloud na AWS, consiste em inserir, editar, buscar e deletar usuários em um banco de dados.
        </p>
        <a href="https://github.com/CharlesHenriquedf/apiRestPortifolio" target="_blank">
        Link do projeto no GitHub
      </a>
        

      </section>
      <section className="projects-container">
        <h2>Projeto Reactjs</h2>
        <p>
          Projeto feito em React, ultilizando context api e redux para atualizar os estados da aplicação,
          È uma aplicação simple, apenas um quiz de perguntas e respostas sobre HTML, CSS e JS. Fiz com intuito de últilizar
          algumas técnicas do ReactJs.
        </p>
        <a href="https://github.com/CharlesHenriquedf/quizReactPortifolio" target="_blank">
        Link do projeto no GitHub
      </a>
       
       


      </section>
      <section className="projects-container">
        <h2>Próximos projetos </h2>

        <p>
          Próximo projeto que está sendo criado para compor esse portifólio é uma aplicação PERN, com Postgresql, Expresse e Nodejs rodando em Docker na AWS e RactJs e Axios no front.
        </p>


      </section>
      <section className="projects-container">
        <h2>Próximos projetos </h2>

        <p>
          Mais um projeto que está sendo criado para compor esse portifólio é uma aplicação MERN, com Mongodb, Expresse e Nodejs rodando em Docker na AWS e RactJs e Axios no front.
        </p>


      </section>
    </div>
  );


}



export default ProjectsContainer;
