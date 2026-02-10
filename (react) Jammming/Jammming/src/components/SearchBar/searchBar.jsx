import { useState } from "react";

function SearchBar() {
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
            
        </form>
    )
}

export default SearchBar;