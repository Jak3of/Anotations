import './App.css'
import Article from './componets/Article';
import Contador from './componets/Contador';
import Mapping from './componets/maping';


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
          title="Creacion de Mappgins"
          code={[ 
            "const notes = [",
            "  {",
            "    id: 1,",
            "    content: 'HTML is easy',",
            "    date: '2019-05-30T17:30:31.098Z',",
            "    important: true",
            "  },",
            "  {",
            "    id: 2,",
            "    content: 'Browser can execute only Javascript',",
            "    date: '2019-05-30T18:39:34.091Z',",
            "    important: false",
            "  },",
            "  {",
            "    id: 3,",
            "    content: 'GET and POST are the most important methods of HTTP protocol',",
            "    date: '2019-05-30T19:20:14.298Z',",
            "    important: true",
            "  }",
            "]",
            "",
            "return (",
            "  <div>",
            "    {notes.map(note => (",
            "      <div>",
            "        <p key={note.id}><strong>{note.content}</strong></p>",
            "        <small><time>{note.date}</time></small>",
            "      </div>",
            "    ))}",
            "  </div>",
            ")"]}

          
          comentar="Utilidad:"
          comentario=" .map() : se usa para iterar sobre un arreglo de objetos"
        >

        </Article>
        <h2 style={{textAlign: "start", color: "#ccc"}}>Mapping:</h2>
          <Mapping />


      </div>
    </>
  )
}

export default App
