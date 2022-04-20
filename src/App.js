import './App.css'
import {useEffect, useState} from "react";


const App = () => {

    const [emojis, setEmojis] = useState([]);
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        fetch('https://emoji-api.com/emojis?access_key=eabc2dc3c3d0e7ee1495e9825f7f9c705db2077b')
            .then(res => res.json())
            .then(data => setEmojis(data))
    }, [])

    const handleSearch = (e) => {
        setKeyword(e.target.value)
    }

    let handleSubmit = () => {
        if (keyword !== '') {
            fetch(`https://emoji-api.com/emojis?search=${keyword}&access_key=eabc2dc3c3d0e7ee1495e9825f7f9c705db2077b`)
                .then(res => res.json())
                .then(data => setEmojis(data))
        }
    }


    return (
        <div className='app'>
            <div className="menu">
                <div className="menu_text">
                    <h1>Emoji Search</h1>
                    <p>Emoji Search with React.js</p>
                    <div>
                        <input type="text" placeholder='Search Emoji' value={keyword} onChange={(e) => handleSearch(e)}/>
                        <button className='search' onClick={handleSubmit}>Search</button>
                    </div>
                </div>
            </div>
            <div className="container">
                {emojis.map(emoji =>
                    <div className="card" key={emoji.slug}>
                        <p className="emoji">
                            {emoji.character}
                        </p>
                        <p className="name">
                            {emoji.unicodeName}
                        </p>
                    </div>
                )}


            </div>
        </div>
    )
}

export default App;