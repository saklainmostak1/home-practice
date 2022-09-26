import logo from './logo.svg';
import './App.css';
const singer = 
  {name: 'nayan', profession: 'singer'}
  

function App() {
  return (
    <div className="App">
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <h5>New Component</h5>
     <Friend></Friend>
     <Friend></Friend>
     <Friend></Friend>
    </div>
  );
}
function Person(){
  return(
    <div className='player'>
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Crickter</p>
    </div>
  )
}
function Friend(){
  return(
    <div className='hello'>
      <h3>Name: Ajay Dev Gan</h3>
      <p>Job: Maramari</p>
    </div>
  )
}
export default App;
