import "./App.css";

function App() {
  return (
    <div className="app">
      <Header title="Upload Poster" />
      <PosterUploadForm />
    </div>
  );
}

function Header({title}) {
  // TODO: Add buttons
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  )
}

function PosterUploadForm() {
  function submit() {
    alert('yay');
  }
  return (
    <form method="post" onsubmit={submit} className="posterForm">
      <input type="text" name="title" className="titleBox"></input>
      <input type="text" name="description" className="descriptionBox"></input>
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}

export default App;
