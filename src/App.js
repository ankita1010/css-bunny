import './App.scss';
import BackLeg from './puppy-parts/BackLeg';
import Body from './puppy-parts/Body';
import FrontLeg from './puppy-parts/FrontLeg';
import Head from './puppy-parts/Head';

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
