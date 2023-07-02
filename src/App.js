import data from "./components/data"
import'./App.css'

import Accordion from './components/Accordion'
function App() {
 
  return (
    
    <div className="main">
      
      <div className="main-content">
      <h1 style={{textAlign:"center"}}>Question</h1>
          {data.map((property)=>(
      // console.log(property)
             <Accordion key={property.id} property={property}/>
             ))}
      </div>
    
    </div>
 
  );
}

export default App;
