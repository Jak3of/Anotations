import postsService from "../../services/notas/postsService"

import Post  from "../../models/Post"
import { useEffect, useState } from "react";

const Getposts = () => {
    const [listPost, setPosts] = useState<Post[]>([]);
    
    const service = new postsService("https://jsonplaceholder.typicode.com/posts");
    

    

    useEffect(() => {
        // Código a ejecutar después del renderizado del componente
        service.getPosts().then(
            posts => setPosts(posts)
        )
        console.log('useEffect se ejecutó');
      }, [ ] );

    

    const [newTitle, setNewTitle] = useState("");
    
    const [newBody, setNewBody] = useState("");
    const handleClickPost = () => {
        const newUserId = document.getElementById("userId") as HTMLInputElement;
        const newPost = new Post( Number(newUserId.value), 999, newTitle, newBody);
        service.createPost(newPost).then(
            post => {
                if (listPost[listPost.length-1].id === post.id) {
                    listPost.pop();
                    setPosts([...listPost, post]);
                } else {
                    setPosts([...listPost, post]);
                }
            }
        )

        setTimeout(() => {
            const lastPostElement = document.getElementById("post-101");
            const container = document.getElementById("lposts");

            if (container && lastPostElement) {
            container.scrollTo({
                top: lastPostElement.offsetTop - container.offsetTop - (container.clientHeight - lastPostElement.clientHeight),
                behavior: "smooth"
            });
            }
        }, 500);
    }


    return (
        <div>
            <h2>Getposts</h2>
            <ol id="lposts" style={{overflowY: "scroll", height: "clamp(20rem, 20vw, 40rem)",border: "1px solid black"}}>
                {listPost.map(
                    post => 
                    <li key={post.id} id={"post-"+post.id.toString()}>User: {post.userId.toString()} Title: {post.title}
                        <p>{post.body}</p>
                    </li>
                    )}
            </ol>
            <div>
                <label htmlFor="userId">UserId: </label> <br/>
                <select name="userId" id="userId" >
                    {
                        [...Array(10)].map((_, index) => 
                        <option key={index+1} value={index+1}>{index+1}</option>
                        )
                    }
                    
                    
                </select>
                <label htmlFor="title">Title: </label> <br/>
                <input onChange={(e) => setNewTitle(e.target.value)} type="text" name="title" id="title" /> <br />
                <label htmlFor="body">Content: </label> <br/>
                <input onChange={(e) => setNewBody(e.target.value)} type="text" name="body" id="body" /> <br />

                <button onClick={handleClickPost} >Post</button>
            </div>
        </div>
    )
}

export default Getposts