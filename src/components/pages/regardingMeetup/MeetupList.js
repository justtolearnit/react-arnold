import MeetupItem from "./MeetupItem";

function MeetupList(props){
    return (
    <ul>
        {props.allMeetups.map((meetups) => (
        <MeetupItem 
        key={meetups.id}
        id={meetups.id}
        image={meetups.image}
        title={meetups.title}
        description={meetups.description}
        />
        ))}
    </ul>         
    );
}
export default MeetupList;