import { useEffect, useState } from "react";
import axios from "axios";

const ApiTestPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex justify-center bg-black/70 z-50 relative p-20">
      <ul className="">
        <>
          <table class="table-auto">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            {posts.map((post) => (
              <tbody className="">
                <tr className="">
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      </ul>
    </div>
  );
};

export default ApiTestPage;
