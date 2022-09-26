import logo from './logo.svg';
import './App.css';

const nayoks = [
  {name: 'Nayan', job:'student'},
  {name: 'Hasan', job:'student1'},
  {name: 'Saklain', job:'student2'},
  {name: 'Mostak', job:'student3'},
]
const singers = ['Nayan', 'Sakib', 'Tamim ', 'Raz', 'avi', 'Ram']

function App() {
  
  return (
    <div className="App">
    {
      singers.map(singer => <Student name={singer} ></Student>)
    }
    </div>
  )
  }


  function Student(props){
    return(
      <div>
        <h1>Name: {props.name} </h1>
        <h2>Job: {props.job} </h2>
      </div>
    )
  }
export default App;
