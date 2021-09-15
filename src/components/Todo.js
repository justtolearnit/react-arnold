import {useState} from 'react'

import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo (property) { 

    const [isModalOpen, setModalOpen]=useState(false)

    
    function clickHandler(){
        setModalOpen(true);
    }
    function onCancel(){
        setModalOpen(false)
    }
  
    
    
    return(

    <div className="card">
        <h1>{property.title}</h1>
        <div className='actions'>
            <button className='btn' onClick={clickHandler}>Delete</button>
        </div>
        {isModalOpen && <Modal onClick={onCancel} />  }
        {isModalOpen && <Backdrop onClick={onCancel} />  }
       
    </div>

    );
}

export default Todo;


// 'property' is a random word its not a keyword, you can use anything. 