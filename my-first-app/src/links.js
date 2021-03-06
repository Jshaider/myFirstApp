import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clock from './clock';
import AjaxCall from './ajaxCall';
import Chap1 from './chap1';

const RLinks = () => (
  <Router>
    <div>
      <ul>
        
        <li>
          <Link to="/">Default</Link>
        </li> 
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr /> 
        <Route exact path="/" component={Default}/>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
const user =[{
  name : 'Haider',
  age : 29,
  gender: 'Male',
  country: 'Pakistan'
},
{
  name : 'Salman',
  age : 33,
  gender: 'Male',
  country: 'Arab'
}];
const Default = () => (
    <div>
      {/* <h1>Select Menu to see BrowserRouter in working</h1>
        {user.map((item, index) => (
          <div>
          <h2>{item.name} is {item.age} year old</h2>
          <h3>He is a {item.gender}, who live in {item.country}.</h3></div>
        ))} */}
        <Chap1/>
    </div>
);
const Home = () => (
  <div>
    <Clock/>
  </div>
);

const About = () => (
  <div>
    <table >
        <thead>
          <tr>
              <th>id</th>
              <th>Name</th>
              <th>Origin</th>
              <th>Life_Span</th>
              
          </tr>
        </thead>
        <AjaxCall/>
        
    </table>
    
    
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/PROPSvsSTATE`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
    
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default RLinks;