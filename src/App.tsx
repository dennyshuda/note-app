import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Note, propsNote } from "./components/note";
import { notesData } from "./data/index";

function App() {
  return (
    <div className="App">
      <Header user="denny" />
      {notesData.map((noteItem: propsNote) => {
        return (
          <>
            <Note
              key={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
            />
          </>
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
