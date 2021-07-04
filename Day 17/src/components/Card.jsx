function Card({food,Cal}){
    return(
        <div className="cards">
            <h2> {food}</h2>
            <br/>
            <p> You have consumed {Cal} cals today</p>
        </div>
    )
}
export default Card;