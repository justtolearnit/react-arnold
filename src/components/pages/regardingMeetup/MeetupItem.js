import Cards from '../../ui/Cards';
import classes from './Meetupitem.module.css';

function MeetupItem(props){
    return (
        <Cards>
        <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt="Meetups"/>
        </div>
        <div className={classes.content}>
            <h2>{props.id}</h2>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button>To Favorites</button>
        </div>
        </li>
        </Cards>
    );
}
export default MeetupItem;