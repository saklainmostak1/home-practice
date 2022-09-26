import logo from './logo.svg';
import './App.css';
const singer = 
  {name: 'nayan', profession: 'singer'}
  

function App() {
  return (
    <div className="App">
     <Person name='Rubel' naika='sokhina'></Person>
     <Person name='BappaRaz' naika='jorina'></Person>
     <Person name='majhi' naika='kopila' ></Person>
   
     <h5>New Component</h5>
     <Friend naika='kajal' phone='01823762'></Friend>
     <Friend naika='adha sharma' phone='uewreh'></Friend>
    
    </div>
  );
}
function Person(props){
  console.log(props)
  return(
    <div className='player'>
      <h1>Name: {props.name}</h1>
      <p>naika: {props.naika}</p>
    </div>
  )
}
function Friend(props){
  return(
    <div className='hello'>
      <h3>Name:{props.phone} </h3>
      <p>naika:{props.naika}  </p>
    </div>
  )
}
export default App;
