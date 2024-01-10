
const notes=[
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    }, {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]

const Mapping=() => {

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

    }

    return (
        <ul style={ulstyle}>

            {notes.map(
                ({ id, content, date }, index) => <li style={listyle}
                    key={id}
                >
                    <p ><strong>{"Item "+index+": "+content}</strong></p>
                    <small><time>{date}</time></small>

                </li>
            )

            }
        </ul>
    )
}

export default Mapping