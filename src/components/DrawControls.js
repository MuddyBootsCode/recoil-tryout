import React from 'react';
import AddShapes from "./AddShapes";

const DrawControls = () => {
    return (
        <div className="flex flex-col">
          <div>
            <h3>Muddy Boots Code</h3>
          </div>
          <br/>
          <hr/>
          <div>
            <AddShapes />
          </div>
          <div>
          </div>
        </div>
    );
};

export default DrawControls;