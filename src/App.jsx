import { ProductCard } from "./components/ProductCard"
import "../src/App.css"

export const App = () => {
  console.log('hola mundo')

  const saludoAtodoMundo = 'hola, estoy enviando props a otro componente'

  function saludarMundo(){
    console.log(saludoAtodoMundo, 'Si entra')
  }

  return (
    <>
      <h1 className="text-father">
        {saludoAtodoMundo}
      </h1>
      <ProductCard/>
      <button onClick={saludarMundo}>Saludo a todo mundo</button> 
    </>
  )
}

