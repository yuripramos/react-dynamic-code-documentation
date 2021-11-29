import useInitialService from "./useInitialService";
import ReactDOM from "react-dom";

const App = () => {
  const { code, input, onClick, setInput } = useInitialService();

  return (
    <>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
