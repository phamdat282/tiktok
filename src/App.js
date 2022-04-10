import {useState} from 'react'
function App() {

  //componet đc render lại sau khi setCounter
  //setState gọi callback 
  /*
  const [counter,setCounter] = useState(1)

  const handleCounter = ()=>{
     // setCounter(counter + 1)
        setCounter(prevState => prevState + 1)
  }
  return (
    <div className="App" style={{padding : 20}}>
        <h1>{counter}</h1>
        <button onClick={handleCounter}>Increase</button>
    </div>
  );*/

  const [info ,setInfo] = useState ({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Ha Noi, VN'

  })
  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: 'Yeu mau hong'
    })
  }
  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );

}

export default App;


