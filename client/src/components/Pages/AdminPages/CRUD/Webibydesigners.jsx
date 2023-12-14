import { useState } from "react";
import Axios from "axios";

function Webibydesigners() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [webibydesignersList, setWebibydesignersList] = useState([]);

  const addWebibydesigners = () => {
    Axios.post("http://localhost:8802/webibydesigners/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setWebibydesignersList([
        ...webibydesignersList,
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

  const getWebibydesigners = () => {
    Axios.get("http://localhost:8802/webibydesigners/all").then((response) => {
      setWebibydesignersList(response.data);
    });
  };

  const updateWebibydesignersWage = (id) => {
    Axios.put("http://localhost:8802/webibydesigners/update", { wage: newWage, id: id }).then(
      (response) => {
        setWebibydesignersList(
          webibydesignersList.map((val) => {
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

  const deleteWebibydesigners = (id) => {
    Axios.delete(`http://localhost:8802/webibydesigners/delete/${id}`).then((response) => {
      setWebibydesignersList(
        webibydesignersList.filter((val) => {
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
        <button onClick={addWebibydesigners}>Add Webibydesigners</button>
      </div>
      <div className="webibydesigners">
        <button onClick={getWebibydesigners}>Show Webibydesigners</button>

        {webibydesignersList.map((val, key) => {
          return (
            <div className="webibydesigners">
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
                    updateWebibydesignersWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteWebibydesigners(val.id);
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

export default Webibydesigners;