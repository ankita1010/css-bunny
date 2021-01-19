import './App.scss';
import BackLeg from './bunny-parts/BackLeg';
import Body from './bunny-parts/Body';
import FrontLeg from './bunny-parts/FrontLeg';
import Head from './bunny-parts/Head';

function App() {
  return (
    <div className="App">
      <div className="bunny-wrapper">
        <Head />
        <Body />
        <BackLeg/>
        <FrontLeg/>
      </div>

    </div>
  );
}

export default App;
