import { useState } from "react";
import Axios from "axios";

function Webibyuis() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [webibyuisList, setWebibyuisList] = useState([]);

  const addWebibyuis = () => {
    Axios.post("http://localhost:8802/webibyuis/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setWebibyuisList([
        ...webibyuisList,
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

  const getWebibyuis = () => {
    Axios.get("http://localhost:8802/webibyuis/all").then((response) => {
      setWebibyuisList(response.data);
    });
  };

  const updateWebibyuisWage = (id) => {
    Axios.put("http://localhost:8802/webibyuis/update", { wage: newWage, id: id }).then(
      (response) => {
        setWebibyuisList(
          webibyuisList.map((val) => {
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

  const deleteWebibyuis = (id) => {
    Axios.delete(`http://localhost:8802/webibyuis/delete/${id}`).then((response) => {
      setWebibyuisList(
        webibyuisList.filter((val) => {
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
        <button onClick={addWebibyuis}>Add Webibyuis</button>
      </div>
      <div className="webibyuis">
        <button onClick={getWebibyuis}>Show Webibyuis</button>

        {webibyuisList.map((val, key) => {
          return (
            <div className="webibyuis">
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
                    updateWebibyuisWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteWebibyuis(val.id);
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

export default Webibyuis;