import Greeting from './components/Greeting';
import './App.css';
import StudentInfo from './components/StudentInfo';

const student1 = {
  firstName: "Gisselle",
  lastName: "Pombar",
  email: "gigi@bocacode.com",
  age: 26
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Props!</h1>
        <Greeting firstName="Idan" lastName="Fischer" emoji="😈" />
        <StudentInfo
        student={
          {firstName: "Idan",
          lastName: "Fischer",
          email: "IdanFischer@bocacode.com",
          age: 18
        }}
        />
        <Greeting firstName="Gisselle" lastName="Pombar" emoji="🤗" />
        <StudentInfo student={student1} />
      </header>
    </div>
  );
}

export default App;
