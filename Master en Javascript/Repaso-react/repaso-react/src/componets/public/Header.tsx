import './header.css';

const Header = () => {

 const navstyle : React.CSSProperties = { 
    listStyle: "none", 
    margin: "0", 
    padding: "0", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-around",
    
    }
    const listyle : React.CSSProperties = {
        display: "inline",
        padding: "10px",
        color: "#fff"
    }

    const routesObject = {
        home: "/",
        about: "/about",
        contact: "/contact"
      };
    

    return (
        <>
            <nav style={{ textAlign: "end", display: "block", margin: "0 auto" }}>
                <ul style={navstyle}>
                    {Object.entries(routesObject).map(([key, value]) => (
                        <li key={key} style={listyle}>
                            <a className="headera" href={value}>{key}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}


export default Header