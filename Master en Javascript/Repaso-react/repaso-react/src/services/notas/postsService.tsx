
import axios from "axios";
import Post from "../../models/Post";



class postsService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl=baseUrl;
    }

    public async getPosts(): Promise<Post[]> {
        try {
            const response=await axios.get(`${this.baseUrl}`);
            const postsData=response.data;

            const posts: Post[]=postsData.map((post: Post) => {
                return new Post(post.userId, post.id, post.title, post.body);
            });

            return posts;
        } catch (error) {
            console.error('Error al obtener los posts:', error);
            return []; // Puedes manejar el error aquí o lanzarlo para ser manejado en otro lugar
        }
    }

    async createPost(post: Post): Promise<Post> {
        try {
            const body = {
                userId: post.userId,
                title: post.title,
                body: post.body
            };
            const response= await axios.post(`${this.baseUrl}`, body);
            const postData  =response.data;

            return new Post(postData.userId, postData.id, postData.title, postData.body);

        } catch (error) {
            console.error('Error al crear el post:', error);
            throw error;
        }
    }




}

export default postsService



