import Banner from './components/Banner.js';
import Buttons from './components/Buttons.js';
import Table from './components/Table.js';
import {useState} from 'react';
import satData from './components/satData.js';

function App() {
  //Inside the App() function create the first variable.
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  //Next, create an arrow function called filterByType
   const filterByType = (currentType) => {
   const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
   });
   setSat(displaySats);
  };
  return (
    <div>
      <div>
         <Banner />
         <Buttons
          filterByType={filterByType}
          setSat={setSat}
          displaySats={displaySats} 
         />
         <Table sat={sat} />
      </div>
      
    </div>
  );
  
}

export default App;
