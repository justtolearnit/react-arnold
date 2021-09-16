import MeetupList from "./regardingMeetup/MeetupList";

const dummy_data = [
    {'id':1,title:'Meetup with Muhammed',description:"The meeting was very nice and wonderful,It's was a nice experience, I thank Allah for this wonderful Life!", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"},
    {'id':2,title:'Meetup with Ahamed',description:"The meeting was very nice and wonderful,It's was a nice experience, I thank Allah for this wonderful Life!", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"},
    {'id':3,title:'Meetup with Smayah',description:"The meeting was very nice and wonderful,It's was a nice experience, I thank Allah for this wonderful Life!", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"},
    {'id':4,title:'Meetup with Saji',description:"The meeting was very nice and wonderful,It's was a nice experience, I thank Allah for this wonderful Life!", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"},
]
function AllMeetupsPage(){
    return(
       <section>
                <h1>All Meetups</h1>
               <MeetupList allMeetups={dummy_data}/>
        
       </section>
    );
}
export default AllMeetupsPage;