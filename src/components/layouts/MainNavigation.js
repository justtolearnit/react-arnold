import { Link } from 'react-router-dom'

function MainNavigation(){
    return(
<div>
        <h1>React Meetups...</h1>
        <nav>
            <ul>
                <li>
                   <Link to='/'>All Meetups</Link>
                </li>
                <li>
                   <Link to='/new-meetups'>New Meetups</Link>
                </li>
                <li>
                   <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </nav>
</div>
    );
}
export default MainNavigation;