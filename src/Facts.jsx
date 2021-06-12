import React, {useState} from "react";
import axios from "axios";

function Facts() {

  const [fact, setFact] = useState("");
  const [source, setSource] = useState("");
  const [id, setID] = useState("");

  function getFact() {
    axios.get("https://coolcowfacts.herokuapp.com/",  { crossdomain: true }).then(response => {
      setFact(response.data[0].fact);
      setSource(response.data[0].sources);
      setID(response.data[0].id);
    });
  }

  return (
    <div>
      <h1 class="text-light fw-light landing-text">{id}</h1>
      <p class="text-light">fact number</p>
      <hr class="text-light" />
      <h1 class="text-light fw-light landing-text">"{fact}"</h1>
      <br />
      <span class="text-light">source:</span>
      <h1 class="text-light fw-light landing-text"><a class="text-light fw-light landing-text" href={source}>source</a></h1>
      <br />
      <button class="btn btn-lg btn-outline-light" onClick={getFact}>
          Next Fact
      </button>
    </div>    
  )

}

export default Facts;