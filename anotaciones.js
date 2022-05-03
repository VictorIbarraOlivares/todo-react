/*
JSX: componentes vs. elementos (y props vs. atributos)
Los componentes utilizan props y los elementos utilizan atributos.

Se pueden pasar propiedades directamente al componente, como si fueran 
atributos de HTML:
<App saludo="Hello World" />
Esto se recibe como atributo del componente y puede ser ocupado en el 
mismo:
function App(props) {
  return (
    <div className="App">
        <p>
          Lee React { props.saludo }
        </p>
    </div>
  );
}
Esto muestra:
Lee React Hello World

Tambien se pueden pasar propiedades dentro del cuerpo del componente:
<App>
    <h1>Titulo</h1>
</App>
(Es mala practica pasar html directo de esta forma)
estos atributos se obtienen como "children" dentro del componente:
function App(props) {
  return (
    <div className="App">
        <p>
          Lee React { props.children }
        </p>
    </div>
  );
}
*/

/*

*/
JSON.stringify(); // transforma en texto cualquier elemento de javascript
JSON.parse(); //transforma lo anterior a un elemento de javascript


/**
 * Utilizando efectos en react
 */
console.log('Render (antes del useEffect)');
React.useEffect(() =>{
  console.log('useEffect'); // se jecuta al final, antes de mostrar el html, despues de renderizar
}, [totalTodos]); // este array lleva la varible de la que depende el efecto, solo se activa al existir cambios en el elemento
console.log('Render (luego del useEffect)');