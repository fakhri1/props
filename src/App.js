
import './App.css';
import Profile from './profile/profile';
import Photo from '../src/imageInPublic.jpg';
function App() {
  const handleName = (fullName) => alert(fullName);
  const styleProfile ={
  margin:20,
  padding:20,
  fontFamily:"Barlow Condensed",
  textAlign:"center",
  border:"5px solid rgb(0,76,63)",
  backgroundColor:"rgb(0,152,127,0.1)",
  borderRadius:25,
};
const styleImg ={width:300};
  return (
    <div style={styleProfile}>
      <Profile fullName="fakhri" profession="student" handleName={handleName} 
      >
        <img src={Photo} alt="google" style={styleImg}/>
      </Profile>
    </div>
  );
}

export default App;
