import "./App.css";
import logo from "./logo-m6.jpeg";
import Header from "./components/Header";
import Program from "./components/Program";
import data from "./programme-tv.json";

function App() {
  return (
    <div className="content">
      <Header logo={logo} />
      {data.map((x, i) => {
        return (
          <Program
            key={i}
            time={x.time}
            title={x.title}
            type={x.type}
            duration={x.duration}
            image={x.image}
            isUnseen={x.isUnseen}
            direct={x.direct}
          />
        );
      })}
    </div>
  );
}

export default App;
