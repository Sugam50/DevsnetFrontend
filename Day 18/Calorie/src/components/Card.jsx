function Card({ food, Cal }) {
    return (
        <div className="cards">
            <h2> {food}</h2>
            <br />
            <p> 
                    You have consumed &nbsp;
                    {food==="Pizza"?
                        "VERY HIGH CALORIE"
                        :
                        "SUITABLE CALORIE"}                       
                    
                    &nbsp;
                    today
            </p>
        </div>
    )
}
export default Card;