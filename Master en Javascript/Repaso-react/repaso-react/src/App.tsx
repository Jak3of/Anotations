import './App.css'
import Article from './componets/Article';
import Contador from './componets/Contador';


const Title=({ course }: { course: string }) => <h1>{course}</h1>

const App=() => {

  const course="Bienvenido al Repaso React con TypeScript";


  return (
    <>
      <Title course={course} />
      <div style={{ textAlign: "start" }}>
        <Article
          title="Creacion de componentes:"
          code={["function App() {", "  return (", "    <div>", "      <h1>Hello World</h1>", "    </div>", "  )", "}"]}
          comentar="Utilidad"
          comentario="Funcion que retorna un div" />
        
        <Article
          title="useStade de un componente:"
          code={["const [count, setCount] = useState(0)", "<button onClick={() => setCount(precount => {return precount + 1})}>Incrementar</button>"]}
          comentar="Utilidad:"
          comentario=" useState : se usa para modificar el estado del componente refresh(); ademas de definir precount para que se asegure de que el valor sea la anterior"
        />
        <Contador />
        <Article
          title="Creacion de Hooks:"
          code={[" useEffect(() => {", "  document.title = `You clicked ${count} times`", " })", "<button onClick={() => setCount(precount => {return precount + 1})}>Incrementar</button>"]}
          comentar="Utilidad"
          comentario=" useEffect : se usa para ejecutar una funcion cuando el componente se renderiza"
        ></Article>
        <Article
          title=""
          code={[]}
          comentar=""
          comentario=""
        >

        </Article>


      </div>
    </>
  )
}

export default App
