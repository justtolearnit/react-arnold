function MeetupItem(props){
    return (
        <li>
        <div>
        <img src={props.image} alt="Meetups Image"/>
        </div>
        <h2>{props.id}</h2>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div>
            <button>To Favorites</button>
        </div>
        </li>
    );
}
export default MeetupItem;