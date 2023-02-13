function App() {
  const getFetchData = () => {
    fetch("http://localhost:9000/getadress")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="App">
      <input type="button" value="requestGet" onClick={getFetchData}></input>
      <form method="post" action="http://localhost:9000/postadress">
        <input type="text" name="postcode" value="post" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
