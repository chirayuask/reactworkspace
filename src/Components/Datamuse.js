import React, { useEffect, useState } from 'react'

const Datamuse = () => {
    const [word, setWord] = useState("");
    const [synonyms, setSynonyms] = useState([]);

    const fetchData = async (params) => {
        const response = await fetch(`https://api.datamuse.com/words?rel_syn=${params}`)
        const data = await response.json();
        setSynonyms(data);
    }

    const onClickSingleWord = (item) => {
        setWord(item);
        fetchData(item);
    }

    const onSubmitSynonymsHandler = (e) => {
        e.preventDefault();
        fetchData(word);
    }
    return (
        <div className='matchgame'>
            <form onSubmit={(e) => onSubmitSynonymsHandler(e)}>
                <label htmlFor='word-input'> Your Word
                    <input id="word-input" value={word} onChange={(e) => setWord(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
            <div style={{ cursor: 'pointer' }}>
                <ul>
                    {
                        synonyms?.length > 0 && synonyms.map((word, index) => (
                            <li onClick={() => onClickSingleWord(word.word)} key={index}> {word.word} </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default Datamuse