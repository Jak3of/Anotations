
type Params  = {
    title: string
    code: Array<string>
    comentar: string
    comentario: string
}

const Article = ({title, code, comentar, comentario}: Params) => {
    
    const codeStyle : React.CSSProperties = { 
        background: "#333", 
        color: "white",
        padding: "20px",
        whiteSpace: "pre-wrap",
        textAlign: "start", 
        display: "block", 
        margin: "0 auto",
        position: "relative"}
    
    const btncopy : React.CSSProperties = {
        margin: "0 auto",
         display: "block",
         position: "absolute",
         top: "5px",
         right: "5px"}

    return (
        <div>
            <h2>{title}</h2>
            <code 
            style={codeStyle}>
                 {code.map((code) => {
                    return  code +( (code != code[code.length - 1])?  "\n": "") })
                 } 
                 <button onClick={() => navigator.clipboard.writeText(code.join("\n"))} 
                 style={btncopy}>Copy</button>
                 </code>
            <h3>{comentar}</h3>
            <p> {comentario}</p>
        </div>
    )
}

export default Article