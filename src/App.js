
import Komponen from "./components/komponen";
import Number from "./components/komponen/number";
import picture from "./mgm.jpg"

function App() {
  return (
    <div className="App">
      <Komponen />
      <img src={picture} alt="mgm"height="100px"></img>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate magnam culpa debitis inventore, asperiores quas ullam quo recusandae, maiores dolor tempore fuga soluta eaque quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eum quos. Suscipit dignissimos eos, reprehenderit sequi ipsa sed voluptatum veritatis vitae illum unde aliquid ab praesentium, at quos enim iusto et similique autem itaque ratione minus. Explicabo voluptas nulla, molestias repellat necessitatibus suscipit ea consequuntur. Iusto sed nulla tenetur fuga.</p>
      <button id="plus">+</button>
      <Number />
      <button id="minus">-</button>
    </div>
  );
}

export default App;
