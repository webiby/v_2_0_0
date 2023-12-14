import { useState } from "react";
import Axios from "axios";

function Infrastructures() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [infrastructuresList, setInfrastructuresList] = useState([]);

  const addInfrastructures = () => {
    Axios.post("http://localhost:8802/infrastructures/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setInfrastructuresList([
        ...infrastructuresList,
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

  const getInfrastructures = () => {
    Axios.get("http://localhost:8802/infrastructures/all").then((response) => {
      setInfrastructuresList(response.data);
    });
  };

  const updateInfrastructuresWage = (id) => {
    Axios.put("http://localhost:8802/infrastructures/update", { wage: newWage, id: id }).then(
      (response) => {
        setInfrastructuresList(
          infrastructuresList.map((val) => {
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

  const deleteInfrastructures = (id) => {
    Axios.delete(`http://localhost:8802/infrastructures/delete/${id}`).then((response) => {
      setInfrastructuresList(
        infrastructuresList.filter((val) => {
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
        <button onClick={addInfrastructures}>Add Infrastructures</button>
      </div>
      <div className="infrastructures">
        <button onClick={getInfrastructures}>Show Infrastructures</button>

        {infrastructuresList.map((val, key) => {
          return (
            <div className="infrastructures">
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
                    updateInfrastructuresWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteInfrastructures(val.id);
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

export default Infrastructures;