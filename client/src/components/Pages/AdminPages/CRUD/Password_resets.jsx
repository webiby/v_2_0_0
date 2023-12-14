import { useState } from "react";
import Axios from "axios";

function Password_resets() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [password_resetsList, setPassword_resetsList] = useState([]);

  const addPassword_resets = () => {
    Axios.post("http://localhost:8802/password_resets/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setPassword_resetsList([
        ...password_resetsList,
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

  const getPassword_resets = () => {
    Axios.get("http://localhost:8802/password_resets/all").then((response) => {
      setPassword_resetsList(response.data);
    });
  };

  const updatePassword_resetsWage = (id) => {
    Axios.put("http://localhost:8802/password_resets/update", { wage: newWage, id: id }).then(
      (response) => {
        setPassword_resetsList(
          password_resetsList.map((val) => {
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

  const deletePassword_resets = (id) => {
    Axios.delete(`http://localhost:8802/password_resets/delete/${id}`).then((response) => {
      setPassword_resetsList(
        password_resetsList.filter((val) => {
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
        <button onClick={addPassword_resets}>Add Password_resets</button>
      </div>
      <div className="password_resets">
        <button onClick={getPassword_resets}>Show Password_resets</button>

        {password_resetsList.map((val, key) => {
          return (
            <div className="password_resets">
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
                    updatePassword_resetsWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deletePassword_resets(val.id);
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

export default Password_resets;