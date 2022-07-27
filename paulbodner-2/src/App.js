import './App.css';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Fullpage from './components/FullPage';



function App() {
  return (
    <>
      <div className='page'>
        <Banner />
        <Menu />
      </div>
      <Fullpage />
    </>
  );
}

export default App;
