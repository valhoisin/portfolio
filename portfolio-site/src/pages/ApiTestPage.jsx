import { useEffect, useState } from "react";
import axios from "axios";

const ApiTestPage = () => {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPostTitle, setSelectedPostTitle] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch posts. Please try again later.");
      });
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // Clear the selected title and error when the user starts typing again
    setSelectedPostTitle("");
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postId = parseInt(inputValue);

    // Check if the input is a valid number within the range of posts
    if (isNaN(postId) || postId < 1 || postId > 100) {
      setError("Please enter a valid ID between 1 and 100.");
      setSelectedPostTitle("");
      return;
    }

    // Find the post with the matching ID
    const foundPost = posts.find((post) => post.id === postId);

    if (foundPost) {
      // Set the title of the found post
      setSelectedPostTitle(foundPost.title);
      setError(null);
    } else {
      // Handle the case where no post is found
      setSelectedPostTitle("");
      setError(`No post found with ID: ${postId}.`);
    }

    setInputValue(""); // Clear the input field after submission
  };

  return (
    <div className="flex flex-col justify-center items-center bg-black/70 z-20 relative p-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[50%] mb-15"
      >
        <input
          type="number"
          className="bg-white w-[25%] p-2 mb-4 text-black text-lg font-semibold rounded-lg"
          placeholder="Choose ID (1-100)"
          value={inputValue} // Makes the input a controlled component
          onChange={handleChange}
        />
        <button
          type="submit" // Type 'submit' is important for form submission
          className="border border-white rounded-full px-8 py-2 mb-4 cursor-pointer text-white bg-sky-500 font-semibold transition-all duration-300 hover:bg-sky-700"
        >
          Submit
        </button>
        <div>
          {/* Conditionally display the post title or an error message */}
          {selectedPostTitle && (
            <p className="my-4 text-xl font-bold text-white">
              Post Title:{" "}
              <span className="text-sky-500">{selectedPostTitle}</span>
            </p>
          )}
          {error && (
            <p className="my-4 text-xl font-bold text-red-500">{error}</p>
          )}
        </div>
      </form>

      <table className="table-auto">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, idx) => (
            <tr key={idx} className="border-t-2 border-gray-700">
              <td className="p-2 w-[5%]">{post.userId}</td>
              <td className="p-2">{post.title}</td>
              <td className="p-2">{post.body}</td>
              <td className="p-2">{post.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiTestPage;
