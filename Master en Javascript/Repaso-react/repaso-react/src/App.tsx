import './App.css'
import Main from './componets/public/Main'
import Header from './componets/public/Header'


const Title=({ course }: { course: string }) => <h1>{course}</h1>

const App=() => {

  const course="Bienvenido al Repaso React con TypeScript";


  return (
    <>
      <Title course={course} />
      <Header />
      <Main />
    </>
  )
}

export default App
