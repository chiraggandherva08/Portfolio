import "./App.css";
import Menubar from "./Components/menubar/Menubar";
import Intro from "./Components/intro/Intro";
import Message from "./Components/intro/Message";
import Work from "./Components/work/Work";
import Preview from './Components/preview/Preview';
import Testimonial from "./Components/testimonial/Testimonial";
import Blog from "./Components/blogs/Blog";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <div className="App" id="home">
      <Menubar />
      <Intro />
      <Message />
      <Work/>
      <Preview/>
      <Blog/>
      <Testimonial/>
      <Contact/>
      
    </div>
  );
}

export default App;
