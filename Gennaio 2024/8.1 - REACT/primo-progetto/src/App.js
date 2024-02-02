
import './App.css';
import ButtonComponent from './Components/PrimoComp';
import ImageComponent from './Components/SecondoComp';

let testoBtn = "Bottone";
let risorsa = "https://www.covercentury.com/covers/ps2/m/Metal_Gear_Solid_2_Substance_PAL(de)-Front.jpg";
let testoImg = "Copertina MGS2";
let widthImg = "200px";

function App() {
  return (
    <div className="App">
      <h1>Prima prova</h1>
      <ButtonComponent textBtn={testoBtn}/> 
      <ImageComponent source={risorsa} alternate={testoImg} larg={widthImg}/>
     
    </div>
  );
}

export default App;
