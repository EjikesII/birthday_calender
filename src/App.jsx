import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [family, setFamily] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>We have {family.length} Family Birthdays Today</h3>;
        <List family={family} />
        <button 
         type="button" 
         className="btn btn-block" 
         onClick={() => setFamily([])} 
         >
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
