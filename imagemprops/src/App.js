import NoticiaComponente from './componentes/NoticiaComponentes';
import Img from './img/girassol.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1 className="title">Imagem</h1>
   <NoticiaComponente
   titulo="Girassol"
   imagem={Img}
   alt="sasasa"
   descricao="Olha que girassol lindo"
   categoria="Combinando com o dia"
   />
    </div>
  );
}

export default App;
