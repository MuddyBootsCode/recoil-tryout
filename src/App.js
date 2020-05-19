import React from 'react';
import './tailwind.generated.css';
import ItemList from "./components/ItemList";
import SelectedItems from "./components/SelectedItems";
import DrawArea from "./components/DrawArea";

function App() {

  return (
      <div className="App flex flex-col justify-center w-full">
          <div>
              <ItemList />
          </div>
          <div>
              <SelectedItems />
          </div>
          <div>
              <DrawArea />
          </div>
      </div>
  );
}

export default App;
