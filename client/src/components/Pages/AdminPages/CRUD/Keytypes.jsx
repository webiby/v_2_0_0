import { useState } from "react";
import Axios from "axios";

function Keytypes() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [keytypesList, setKeytypesList] = useState([]);

  const addKeytypes = () => {
    Axios.post("http://localhost:8802/keytypes/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setKeytypesList([
        ...keytypesList,
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

  const getKeytypes = () => {
    Axios.get("http://localhost:8802/keytypes/all").then((response) => {
      setKeytypesList(response.data);
    });
  };

  const updateKeytypesWage = (id) => {
    Axios.put("http://localhost:8802/keytypes/update", { wage: newWage, id: id }).then(
      (response) => {
        setKeytypesList(
          keytypesList.map((val) => {
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

  const deleteKeytypes = (id) => {
    Axios.delete(`http://localhost:8802/keytypes/delete/${id}`).then((response) => {
      setKeytypesList(
        keytypesList.filter((val) => {
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
        <button onClick={addKeytypes}>Add Keytypes</button>
      </div>
      <div className="keytypes">
        <button onClick={getKeytypes}>Show Keytypes</button>

        {keytypesList.map((val, key) => {
          return (
            <div className="keytypes">
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
                    updateKeytypesWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteKeytypes(val.id);
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

export default Keytypes;