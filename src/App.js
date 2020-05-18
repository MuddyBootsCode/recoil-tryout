import React from 'react';
import './tailwind.generated.css';
import { RecoilRoot } from 'recoil';
import ItemList from "./components/ItemList";
import SelectedItems from "./components/SelectedItems";

function App() {

  return (
    <RecoilRoot>
      <div className="App" className="flex justify-center">
          <div>
              <ItemList />
              <SelectedItems />
          </div>

      </div>
    </RecoilRoot>

  );
}

export default App;
