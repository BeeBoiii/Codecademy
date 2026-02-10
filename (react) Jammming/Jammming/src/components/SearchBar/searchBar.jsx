import { useState } from "react";

function searchBar() {
    const [userInput, setUserInput] = useState('');

    return (
        <form>
            <input 
                placeholder="Enter a song name" 
                name="searchBar" 
                type="text" 
                value={userInput} 
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button>Search</button>
        </form>
    )
}

export default searchBar;