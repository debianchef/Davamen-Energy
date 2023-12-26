// views
import { About, Contact, Hero, OurServices } from "./pages";

// components
import { Menu, Logo} from "./components";


function App() {
  return (
    <>
       <Logo />
      <Hero />
      <About />
      <OurServices />
      <Contact />
      <Menu />
   
    </>
  );
}

export default App;
