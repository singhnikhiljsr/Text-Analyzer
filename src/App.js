import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="Text Explorer" about="About" /> */}
      <Navbar title="Text Analyzer" />
      <TextForm heading="Enter the text to analyze"/>
      {/* <About heading="About Us"/> */}
    </>
  );
}

export default App;
