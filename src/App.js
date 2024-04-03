import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './Components/Navbar';
//import AddStudentForm from './Components/AddStudentForm';
//import AddCourseForm from './Components/AddCourseForm';
import LoginForm from './Components/LoginForm';


function App() {
  return (

    <div className="App">
      {/* <AddStudentForm/> */}
      {/* <AddCourseForm/> */}
      <LoginForm/>
      </div>
      
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Home';
// import AddStudentForm from './Components/AddStudentForm';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/AddStudentForm" component={AddStudentForm} />
       
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;

