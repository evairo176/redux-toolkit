import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchPost } from "./redux/slices/counterSlices";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // select store state
  const post = useSelector((state) => state.post);
  const { postList, loading } = post;
  console.log(postList);

  return (
    <div className="App">
      <h1>Post List</h1>
      <hr />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        postList?.map((row, key) => {
          return (
            <div key={key}>
              <h2>{row?.title}</h2>
              <p>{row?.body}</p>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
