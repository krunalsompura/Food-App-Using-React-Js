
import { useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card";
import Header from "./Header";

function App() {
  const [list, setList] = useState([]);
  console.log(list);
  const getData = async (fname) => {
    let response = await axios.get(
      `https://api.edamam.com/search?q=${fname}&app_id=78994fc5&app_key=48e9fb8aed873284f1a896ecd5bbad35`
    );
    setList(response.data.hits);
  };

  const [timeoutid, SetTimeoutid] = useState();
  const textChanger = (event) => {
    clearTimeout(timeoutid);
    let timeout = setTimeout(() => getData(event.target.value), 500);
    SetTimeoutid(timeout);
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: "#171717" }}>
        <Header fun={textChanger} />
      </div>
  
      <div style={{display:"flex", justifyContent:"space-evenly" , gap:"10px", flexWrap:"wrap",padding:"20px 0"}}>
        {list.length ? (
          list.map((item, i) => (
            <Card
              key={i}
              data={item.recipe.label}
              img={item.recipe.image}
              cal={item.recipe.calories}
            />
          ))
        ) : (
          <>
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        )}
      </div>
    </div>
  );
}

export default App;