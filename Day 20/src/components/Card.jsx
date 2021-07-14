function Card({ food, Cal ,List,List2,setState,setCalorie}) {
 
    return (
        <div className="cards">
            <h2> {food}
                <button onClick={()=>{
                    setState(List.filter(el=>el!==food))
                    setCalorie(List2.filter(el2=>el2!==Cal))

                }}>Delete</button>
            </h2>
            <br />
            <p> You have consumed {Cal} cals today

            </p>
                
        </div>
    )
  
}
export default Card;