import { useState } from "react";
function Profile() {
    const [loggedIn, setloggdIn] = useState(100)
// var loggedIn=200
// let loggedIn=300
    return (
        <div>
            {loggedIn==100?<h1>Wel-come user1</h1> 
            :loggedIn==200?<h1>Wel-come Guser2</h1>
            :<h1>Wel-come Guser3</h1>}
        </div>
    )
}
export default Profile;