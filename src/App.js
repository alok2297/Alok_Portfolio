import './App.css';
import { Navar } from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './component/Banner';
import { Skill } from './component/skill';
import { Project } from './component/Project';
import { Footer } from './component/Footer';
function App() {
  return (
    <div>
    <Navar/>
    <Banner/>
    <Skill/>
    <Project/>
    <Footer/>
    </div>
  );
}

export default App;
