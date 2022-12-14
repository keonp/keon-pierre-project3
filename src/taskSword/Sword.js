import SwordOption1 from "./swordOptions/SwordOption1.js";
import SwordOption2 from "./swordOptions/SwordOption2.js";
import SwordOption3 from "./swordOptions/SwordOption3.js";

function Sword({setDisplay, username, sword, setSword, userStats}) {
    return(
        <div className='displayContainer SwordPageContainer'>
            <div className='contentContainer'>
                <h1>Objective: Obtain A Weapon</h1>
                <p>You make your way to 7 Little Men, the local blacksmith. It's a family business run by dwarves, infamous for their metallurgy. If there is anyone in the village who can craft you a formidable weapon, it's someone from this family! You approach the gruff and stout blacksmith and explain the current predicament. He seems uninterested and unwilling to help. You attempt to butter him up and mention the the great work his family has done. To which he asks, <strong>"Who of my 6 other brothers do <em>you</em> even know?</strong> If you are a true admirer of our craft, this should be a simple question. Then I shall craft you the finest blade y'ever saw!"</p>

                <button
                    onClick={() => {
                        setSword('Wooden Sword')
                        userStats.push(`You acquired a Wooden Sword...`);
                        setDisplay(<SwordOption1 username={username} setDisplay={setDisplay} userStats={userStats} sword='Wooden Sword'/>)
                        }
                    }
                > Gleeful</button>


                <button
                    onClick={() =>{
                        setSword('Dragon Long Sword')
                        userStats.push(`You acquired a Dragon Long Sword!!`);
                        setDisplay(<SwordOption2 username={username} setDisplay={setDisplay} userStats={userStats} sword='Dragon Long Sword'/>)
                        }
                    }
                >Doc</button>

                <button
                    onClick={() => {
                        setSword('Wooden Sword')
                        userStats.push(`You acquired a Wooden Sword...`);
                        setDisplay(<SwordOption3 username={username} setDisplay={setDisplay} userStats={userStats} sword='Wooden Sword'/>)
                        }
                    }
                >Smiley</button>
            </div>
        </div>
    )
}

export default Sword;