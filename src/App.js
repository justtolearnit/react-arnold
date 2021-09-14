import Todo from './components/Todo'
import Modal from './components/Modal'
import Backdrop from './components/Backdrop'


function App() {

    
 
  
  return (
    <div>
    <Todo title='React' />,
    <Todo title='Angular' />,
    <Todo title='MongoDB' />
    <Modal />
    <Backdrop  />
    </div>
  );
}
export default App;
