import Card from './Card'
function App() {

    var array1 = [];
    for (let i = 0; i < 35; i++) {
        array1[i] = i;

    }
    return (
        <div className="container">
            {
                array1.map((item, index) =>

                    (

                        index % 2 === 0) ?
                        item = <Card key={index} bg="white" />
                        :
                        item = <Card key={index} bg="black" />

                )
            }
        </div>
    )
}


export default App;