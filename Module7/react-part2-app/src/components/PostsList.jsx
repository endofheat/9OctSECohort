import { useData } from "../hooks/useData";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  const postsData = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit,
    []
  );

  console.log(postsData);

  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };

  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul>
      <label>Posts per page: 
        <select nam="postLimit" onChange={handleChangeLimit}>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </label>
      {/* <Link to='/posts?limit=10'>Load 10 Posts</Link> */}
    </>
  );
}

export function Post() {
  const allParams = useParams();
  console.log(allParams);
  const { id } = useParams(); // custom hook to access dynamic params
  const navigate = useNavigate();
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);

  const handleNextPost = () => {
    navigate("/posts/" + (parseInt(id) + 1));
  };

  const handlePreviousPost = () => {
    navigate("/posts/" + (parseInt(id) - 1));
  };

  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
      {parseInt(id) > 1 && (
        <button onClick={handlePreviousPost}>Previous Post</button>
      )}
      <button onClick={handleNextPost}>Next Post</button>
    </div>
  );
}
