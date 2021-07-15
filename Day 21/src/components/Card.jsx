function Card({ food, index, Cal, List, List2, setState, setCalorie, chnge, setChange }) {

    var new_name, new_cal;
    if (index !== chnge) {
        return (
            <div className="cards">
                <h2> {food}
                    <div className="btns">
                        <button onClick={() => {
                            setState(List.filter(el => el !== food))
                            setCalorie(List2.filter(el2 => el2 !== Cal))

                        }}>Delete</button>
                        <button onClick={() => { setChange(chnge = index) }}> edit</button>
                    </div>
                </h2>
                <br />
                <p> You have consumed {Cal} cals today</p>

            </div>
        )
    }
    else {
        return (
            <div className="cards">
                <h2> <input placeholder={food} onChange={(e) => { new_name = e.target.value }}></input>
                    <button onClick={() => {
                        if (!new_name) {
                            new_name = food
                        }
                        if (!new_cal) {
                            new_cal = Cal
                        }
                        List.splice(index, 1, new_name)
                        List2.splice(index, 1, new_cal)
                        setState(List)
                        setCalorie(List2)
                        setChange(chnge = -1)


                    }}>Save</button>

                </h2>
                <br />
                <p><input placeholder={Cal} onChange={(e2) => { new_cal = e2.target.value }}></input></p>

            </div>
        )

    }

}
export default Card;