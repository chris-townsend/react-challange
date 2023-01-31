import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className='App'>
      { <StatefulGreetingWithPrevState />}
    </div>
  );
}

export default App;