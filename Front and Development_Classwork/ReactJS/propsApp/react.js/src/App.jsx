function App(){
  return(
    <div>
      <Student name="Kumar Priyanshu"/>
      <Student name="Om prakhar"/>
      <Student name="Mradul"/>
    </div>

  );

  function Student(props){
    return <h1>Hello, I am {props.name}</h1>
  }
}
export default App;