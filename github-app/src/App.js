import React from 'react';

function App() {
  return (
    <div className="app">
      <div className="search">
        <input 
          type="search" 
          placeholder="Digite o nome do usuário" 
        />
      </div>

      <div className="user-info">
        <img src="https://avatars.githubusercontent.com/u/53182990?v=4" />
        <h1>
          <a href="https://github.com/tairadev">Guilherme Henrique Taira</a>
        </h1>

        <ul className="repos-info">
          <li>- Repositórios: 8</li>
          <li>- Seguidores: 0</li>
          <li>- Seguindo: 0</li>
        </ul>

        <div className="actions">
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>

        <div className="repos">
          <h2>Repositórios:</h2>
          <ul>
            <li>
              <a href="#">Nome do repositório</a>
            </li>
          </ul>
        </div>

        <div className="starred">
          <h2>Favoritos:</h2>
          <ul>
            <li>
              <a href="#">Nome do repositório</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
