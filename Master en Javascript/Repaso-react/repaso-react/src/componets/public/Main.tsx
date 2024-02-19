
import Article from '../main/Article';
import Contador from '../main/Contador';
import Getposts from '../main/Getposts';
import Mapping from '../main/Maping';
import Notes from '../main/Notes';

const Main=() => {
  return (
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
      <h2 style={{ textAlign: "start", color: "#ccc" }}>Mapping:</h2>
      <Mapping />
      <Article
        title="Formulario para notas:"
        code={[
          "class Note {",
          "static idCount = 0;",
          "constructor(",
          "    public content: string,",
          "    public date: string,",
          "    public important: boolean",
          "    ) {",
          "        this.id = ++Note.idCount;",
          "    }",
          "}",
          "",
          "const initialNotes =[ ",
          "  new Note( 'HTML is easy', '2019-05-30T17:30:31.098Z', true)",
          "  new Note( 'Browser can execute only Javascript', '2019-05-30T18:39:34.091Z', false)",
          "  new Note( 'GET and POST are the most important methods of HTTP protocol', '2019-05-30T19:20:14.298Z', true)",
          "  new Note( 'HTML elements are the building blocks of HTML pages', '2019-05-30T17:30:31.098Z', true)",
          "]",
          "",
          "",
          "// Dentro de tu componente",
          "const [notes, setNotes] = useState(initialNotes)",
          "const [newNote, setNewNote] = useState('')",
          "const [showAll, setShowAll] = useState(true)",
          "const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {",
          "    setNewNote(event.target.value)",
          "}",
          "",
          "const handleClick = () => {",
          "    const noteToAddToState = new Note(newNote, new Date().toISOString(), Math.random() > 0.5)",
          "    setNotes([...notes, noteToAddToState])",
          "}",
          "",
          "return (",
          "  <div>",
          "    {notes.map(",
          "    ({ id, content, date }) => (",
          "        <li style={listyle} key={id}  > ",
          "        <p ><strong>{'Item '+id+': '+content}</strong></p> ",
          "        <small><time>{date}</time></small>",
          "    </li>",
          "    )",
          "  )}",
          "  </div>",
          ")"
        ]}


        comentar="Utilizando handelclick y usestate:"
        comentario=" useState : se usa para crear un estado de variable y un setstate para actualizarlo"
      />
      <Notes />

      <Article
        title="Axios para Get:"
        code={[

        ]}

        comentar=""
        comentario=""
      />
      <Getposts />


    </div>
  )
}

export default Main