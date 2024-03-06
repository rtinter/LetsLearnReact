import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate} from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { error, isLoading, data: blogs } = useFetch("http://localhost:8000/blogs/" + id);

    const navigate = useNavigate();

    const handleClick = () => {

        fetch("http://localhost:8000/blogs/" + blogs.id,{
            method: "DELETE"
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <div>is Loading...</div>}
            {blogs && (
                <div>
                    <h2>{blogs.title}</h2>
                    <p>written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;