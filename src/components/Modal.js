function Modal(){
    function deleteHandler(){
        console.log("Testing Console logging onClick event")
      }

    return (
        <div className='modal'>
            <h2>Are you sure ?</h2>
            <button className='btn btn--alt'>Cancel</button>
            <button className='btn'onClick={deleteHandler}>Confirm</button>
        </div>
    );
}
export default Modal