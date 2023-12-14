import { useState } from "react";
import Axios from "axios";

function Webibybackends() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [webibybackendsList, setWebibybackendsList] = useState([]);

  const addWebibybackends = () => {
    Axios.post("http://localhost:8802/webibybackends/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setWebibybackendsList([
        ...webibybackendsList,
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

  const getWebibybackends = () => {
    Axios.get("http://localhost:8802/webibybackends/all").then((response) => {
      setWebibybackendsList(response.data);
    });
  };

  const updateWebibybackendsWage = (id) => {
    Axios.put("http://localhost:8802/webibybackends/update", { wage: newWage, id: id }).then(
      (response) => {
        setWebibybackendsList(
          webibybackendsList.map((val) => {
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

  const deleteWebibybackends = (id) => {
    Axios.delete(`http://localhost:8802/webibybackends/delete/${id}`).then((response) => {
      setWebibybackendsList(
        webibybackendsList.filter((val) => {
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
        <button onClick={addWebibybackends}>Add Webibybackends</button>
      </div>
      <div className="webibybackends">
        <button onClick={getWebibybackends}>Show Webibybackends</button>

        {webibybackendsList.map((val, key) => {
          return (
            <div className="webibybackends">
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
                    updateWebibybackendsWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteWebibybackends(val.id);
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

export default Webibybackends;