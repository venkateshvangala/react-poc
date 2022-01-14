import './profile.scss';

function Profile() {

    return(
        <div className="container-main profile-container"> 
            <div className='nav-container'>
                <ul>
                    <li className='active'> <a> Profile </a></li>
                    <li> <a> Posts </a></li>
                    <li> <a> Users </a></li>
                    <li> <a> Contact Us </a></li>
                </ul>
            </div>
            <div>
                
                <h1>This is Profile Page</h1>
            </div>
        </div>
    )
}

export default Profile;
