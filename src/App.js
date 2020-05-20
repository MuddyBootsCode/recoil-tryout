import React from 'react';
import './tailwind.generated.css';
import DrawArea from "./components/DrawArea";

function App() {

  return (
      <div className="App flex flex-col justify-center w-full">
          <div>
              <DrawArea />
          </div>
      </div>
  );
}

export default App;
