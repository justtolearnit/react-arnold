import { useRef } from 'react';
import Cards from "../../ui/Cards";
import classes from './NewMeetupsPage.module.css';

function NewMeetupsPage(){

    const descriptionEnteredRef = useRef();
    const addressEnteredRef = useRef();
    const titleEnteredRef = useRef();
    const imageUrlRef = useRef();
    
    

    function submitHandler(event){
        event.preventDefault();

        const enteredDescription = descriptionEnteredRef.current.value;
        const enteredAddress = addressEnteredRef.current.value;
        const enteredTitle = titleEnteredRef.current.value;
        const imageUrl = imageUrlRef.current.value;

        const newMeetupDetails = {
            description:enteredDescription,
            address:enteredAddress,
            title:enteredTitle,
            image:imageUrl,
            
            
        };
    }


    return (
        <Cards>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control} >
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title"  ref={titleEnteredRef} />
                </div>
                <div className={classes.control} >
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id="image" ref={imageUrlRef} />
                </div>
                <div className={classes.control} >
                    <label htmlFor='title'>Address</label>
                    <input type="text" required id="address" ref={addressEnteredRef} />
                </div>
                <div className={classes.control} >
                    <label htmlFor='title'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionEnteredRef} ></textarea>
                </div>
                <div className={classes.action}>
                    <button>Add Meetup</button>
                </div>      
            </form>
        </Cards>
    );
}
export default NewMeetupsPage;