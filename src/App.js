import logo from './logo.svg';
import './App.css';

const nayoks = [
  {name: 'Nayan', job:'student'},
  {name: 'Hasan', job:'student1'},
  {name: 'Saklain', job:'student2'},
  {name: 'Mostak', job:'student3'},
]

function App() {
  
  return (
    <div className="App">
     {
      nayoks.map(nayok => <Student name={nayok.name} job={nayok.job}></Student>)
     }
    </div>
  )
  }
  function Student(props){
    return(
      <div>
        <h1>Name: {props.name} </h1>
        <h2>Job:{props.job}</h2>
      </div>
    )
  }
export default App;
