import Bloglist from "./Blocklist";
import useFetch  from "./useFetch";

const Home = () => {
    const {data, isLoading, error} = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>is Loading...</div> }
            {data && <Bloglist blogs={data}/>}
        </div>

    );
}
export default Home;