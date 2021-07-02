
function Card(){
    function Image(){
        return(
            <img src="https://static.langimg.com/thumb/msid-69069820,width-680,resizemode-3/navbharat-times.jpg" alt="not loaded"></img>
        )
    }

    return(
        <div className="memec">
            <Image/>
            <h2>This is the meme</h2>
            <p>this is the meme content</p>
        </div>
    )
}

export default Card;