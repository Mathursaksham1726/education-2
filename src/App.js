import logo from './logo.svg';
import './App.css';
import Printlist from './Components/printlist';
import Counter from './Components/component';
import Hookscounter from './Components/hookcounter';
import HooksObject from './Components/hookscomponetobjects';
import Hooksarray from './Components/hookscomponentarray';
import Test from "./Components/testhooks"
import Useeffect from './Components/useEffect1';
import Withclasseffet from './Components/withhelpclasseffect1';
import Useeffect2 from './Components/useEfffect2';
import Eventhandle from './Components/eventhandling';
import Toggle from './Components/toggle';
import Getlist from './Components/getreq';
import Postform from './Components/postreq';
import Fetchdata from './Components/fetchdata';
import Redur from './Components/usereducer';
import Redur2 from './Components/usereducer2'
import Redur3 from './Components/usereducer3'
import WelcomeScreen from './Components/first';

function App() {
  return (
    <div className="App">
    {/* <Hookscounter/> */}
      {/* <HooksObject/>   */}
     {/* <Hooksarray/>  */}
      {/* <Test/>  */}
       {/* <Useeffect/>   */}
       {/* <Useeffect2/>  */}
       {/* <Withclasseffet/>   */}
      {/* <Eventhandle/> */}
       {/* <Toggle/>  */}
        {/* <Getlist/>  */}
       {/* <Postform/> */}
       {/* <Fetchdata/> */}
       {/* <Redur/> */}
       {/* <Redur2/> */}
      <WelcomeScreen/>
    </div>
  );
}

export default App;
