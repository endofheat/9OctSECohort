import { useData } from "../hooks/useData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function PostList() {
  const postsData = useData("https://jsonplaceholder.typicode.com/posts"+id);

  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return <ul>{postList}</ul>;
}

export function Post() {
    const allParams = useParams();
    console.log(allParams);
    const { id } = useParams(); // custom hook to access dynamic params
    const post = useData('https://jsonplaceholder.typicode.com/posts/'+id);

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
    </div>
    )
    }