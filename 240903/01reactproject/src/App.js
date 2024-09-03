
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"


function App() {
  const BodyProps = {
    name: "jehanpark",
    location: "서울시 중구 동호로",
    favorlist: ["축구","야구","농구"]
  }
  return <div className="App">
    <Header />
    <h1>welcome React</h1>
    <Body {...BodyProps} />
    {/* <Body name={name} location = {"서울시 약수동"}/> */}
    <Footer />
  </div>;
}

export default App;
