import logo from './logo.svg';
import './App.css';
import Perfil from'./componentes/Perfil';
import Contador from './componentes/Contador';
import React, { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mis desarrolladores favoritos son</h1>
        <Perfil
          nombre='Brais Moure'
          pais=' España'        
          imagen='brais'
          cargo='Ingeniero de software'
          empresa='MoureDev'
          perfil='Es un Youtuber español, fundador de la empresa de desarrollo MoureDev.
          MoureDev es el reflejo de la ilusión por crecer como profesional dentro de la 
          industria del desarrollo del software. Como freelance, se ha especializado en 
          desarrollo de aplicaciones iOS, Android y web'
          linkedin='https://es.linkedin.com/in/braismoure'
          youtube='https://www.youtube.com/@mouredev'
          twitter='https://www.twitter.com/Mouredev'
        />
        <Perfil
          nombre='Lucas Moy'
          pais=' Argentina'        
          imagen='lucas'
          cargo='Ingeniero de software'
          empresa='ATL Academy'
          perfil='Es un Youtuber Argentino radicado en españa, fundador de ATL Academy.
          Durante varios años ha compartido sus conocimientos de programación en YouTube.
          Ha varios cursos y bootcamp meticulosamente para que cualquier persona, sin conocimientos
          previos, pueda adentrarse de manera amena y eficiente en este fascinante mundo de
          la programación.'
          linkedin='https://es.linkedin.com/in/lucasmoy'
          youtube='https://www.youtube.com/@atl.academy'
          twitter='https://twitter.com/LucasMoy_dev/status/1678428356495265794'
        />

        {/*implementacion del contador*/}
        <p>has hecho clic {contador} veces</p>
        <button onClick={()=>setContador(contador+1) }>
          Haz clic aqui
        </button>
        
        <button onClick={()=>setContador(contador-1) }>
          Haz clic aqui
        </button>
      </div>
    </div>
  );
}
export default App;
