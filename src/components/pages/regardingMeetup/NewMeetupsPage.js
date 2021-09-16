import Cards from "../../ui/Cards";
import classes from './NewMeetupsPage.module.css';

function NewMeetupsPage(){
    return (
        <Cards>
            <form className={classes.form}>
                <div className={classes.control} >
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title"/>
                </div>
                <div className={classes.control} >
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id="image"/>
                </div>
                <div className={classes.control} >
                    <label htmlFor='title'>Address</label>
                    <input type="text" required id="address"/>
                </div>
                <div className={classes.control} >
                    <label htmlFor='title'>Description</label>
                    <textarea id='description' required rows='5'></textarea>
                </div>
                <div className={classes.action}>
                    <button>Add Meetup</button>
                </div>      
            </form>
        </Cards>
    );
}
export default NewMeetupsPage;