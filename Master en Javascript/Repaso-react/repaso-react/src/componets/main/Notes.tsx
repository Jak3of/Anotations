
import React, { useState } from "react"

class Note {
    static idCount = 0;
    public id: number ;
    constructor(
        
        public content: string,
        public date: string,
        public important: boolean
    ) {
        this.id = ++Note.idCount
    }
}

const initialNotes : Note[]=[
    new Note( 'HTML is easy', '2019-05-30T17:30:31.098Z', true),
    new Note( 'Browser can execute only Javascript', '2019-05-30T18:39:34.091Z', false),
    new Note( 'GET and POST are the most important methods of HTTP protocol', '2019-05-30T19:20:14.298Z', true),
    new Note( 'HTML elements are the building blocks of HTML pages', '2019-05-30T17:30:31.098Z', true)
]

const Notes=() => {

    const listyle : React.CSSProperties = {
        textAlign: "start",
        display: "block",
        margin: "0 auto",
        padding: "10px",
        background: "#333339",
        marginBottom: "10px",
        color: "#fff",
        borderRadius: "10px"
    }

    const ulstyle : React.CSSProperties = {
        listStyle: "none",
        margin: "0",
        width: "clamp(20rem, 20vw, 40rem)",
        height: "clamp(20rem, 20vw, 40rem)",
        overflowY: "scroll",

    }

    const [notes, setNotes] = useState(initialNotes)

    const [newNote, setNewNote] = useState('')

    const [showAll, setShowAll] = useState(true)

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setNewNote(event.target.value)
    }
        
    const handleClick = () => {
        const noteToAddToState = new Note(newNote, new Date().toISOString(), Math.random() > 0.5)
        console.log(noteToAddToState)

        setNotes([...notes, noteToAddToState])

        setTimeout(() => {
            const container = document.getElementById("notas");
            const lastNoteElement = document.getElementById("note-" + noteToAddToState.id);

            if (container && lastNoteElement) {
            const lastNoteOffset = lastNoteElement.offsetTop - container.offsetTop;

            // Ajustar la posición de desplazamiento dentro del contenedor
            container.scrollTo({
                top: Math.max(0, lastNoteOffset - (container.clientHeight - lastNoteElement.clientHeight)),
                behavior: "smooth"
            });
            }
        }, 300);

    }

    const handleShowAll = () => {
        setShowAll(!showAll);
    }


    return (
        <>
            <h1>Notes</h1>
            <button 
            onClick ={handleShowAll}

            >
                {showAll ? "Show Only Important" : "Show All"}
            </button>
            <ul id="notas" style={ulstyle} >
                {notes
                .filter(({ important }) =>  important || showAll)
                .map(
                    ({ id, content, date }) => 
                    <li 
                    style={listyle}
                    key={id}
                    id={"note-"+id}
                    >
                        <p ><strong>{"Item "+id+": "+content}</strong></p>
                        <small><time>{date}</time></small>
                    </li>
                )}
            </ul>
            

            <div >
                <input type="text" value={newNote} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </div>
        </>

    )
}

export default Notes