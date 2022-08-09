import React, { Suspense } from "react";
import "./App.css";
import PostList from "./PostList";
import createResource from "./Resource";

const resource = createResource();

function App() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;

// let data = { title: "Waiting for Data" };
//   const [todo, setTodo] = useState(data);
//   const [isFetching, setFetching] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       setFetching(true);
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos/1"
//       );
//       console.log("response = ", response);
//       let data2 = await response.json();
//       setTodo(data2);
//       setFetching(false);
//       console.log("Data = ", todo);
//     }
//     fetchData();
//   }, []);

//   if (isFetching) {
//     return <div>Data Loading.....</div>;
//   }

//   return (
//     <div>
//       Hello Fetch
//       <span>Title: {todo.title}</span>
//     </div>
//   );
