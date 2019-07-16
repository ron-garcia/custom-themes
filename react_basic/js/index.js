function Person(props) {
  return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Age : {props.age}</p>
        <p>{props.children}</p>
      </div>
  );
}

const myApp = (
  <div>
    <div><buton>Switch Name</buton></div>
    <Person name="Ronald Garcia" age={Math.floor(Math.random() * 30)}/>
    <Person name="Marivic Garcia" age="24">My wife</Person>
    <Person name="Aina Garcia" age="20"> She is my child.</Person>
  </div>);

ReactDOM.render(myApp, document.querySelector('#app'));
