import { useState } from "react";
import Axios from "axios";

function Webibykeys() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [webibykeysList, setWebibykeysList] = useState([]);

  const addWebibykeys = () => {
    Axios.post("http://localhost:8802/webibykeys/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setWebibykeysList([
        ...webibykeysList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getWebibykeys = () => {
    Axios.get("http://localhost:8802/webibykeys/all").then((response) => {
      setWebibykeysList(response.data);
    });
  };

  const updateWebibykeysWage = (id) => {
    Axios.put("http://localhost:8802/webibykeys/update", { wage: newWage, id: id }).then(
      (response) => {
        setWebibykeysList(
          webibykeysList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name: val.name,
                  country: val.country,
                  age: val.age,
                  position: val.position,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteWebibykeys = (id) => {
    Axios.delete(`http://localhost:8802/webibykeys/delete/${id}`).then((response) => {
      setWebibykeysList(
        webibykeysList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addWebibykeys}>Add Webibykeys</button>
      </div>
      <div className="webibykeys">
        <button onClick={getWebibykeys}>Show Webibykeys</button>

        {webibykeysList.map((val, key) => {
          return (
            <div className="webibykeys">
              <div>
                <h3>Name: {val.id}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateWebibykeysWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteWebibykeys(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Webibykeys;