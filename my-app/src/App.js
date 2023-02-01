import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div className='App'>
        <ControlledForm /> 
    </div>
  );
}

export default App;