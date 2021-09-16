import classes from './Cards.module.css'

function Cards (props){
    return(
        <div>
            <div className={classes.cards}>{props.children}</div>
        </div>
    );
}
export default Cards; 