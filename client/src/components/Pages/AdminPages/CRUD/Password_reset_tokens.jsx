import { useState } from "react";
import Axios from "axios";

function Password_reset_tokens() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [password_reset_tokensList, setPassword_reset_tokensList] = useState([]);

  const addPassword_reset_tokens = () => {
    Axios.post("http://localhost:8802/password_reset_tokens/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setPassword_reset_tokensList([
        ...password_reset_tokensList,
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

  const getPassword_reset_tokens = () => {
    Axios.get("http://localhost:8802/password_reset_tokens/all").then((response) => {
      setPassword_reset_tokensList(response.data);
    });
  };

  const updatePassword_reset_tokensWage = (id) => {
    Axios.put("http://localhost:8802/password_reset_tokens/update", { wage: newWage, id: id }).then(
      (response) => {
        setPassword_reset_tokensList(
          password_reset_tokensList.map((val) => {
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

  const deletePassword_reset_tokens = (id) => {
    Axios.delete(`http://localhost:8802/password_reset_tokens/delete/${id}`).then((response) => {
      setPassword_reset_tokensList(
        password_reset_tokensList.filter((val) => {
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
        <button onClick={addPassword_reset_tokens}>Add Password_reset_tokens</button>
      </div>
      <div className="password_reset_tokens">
        <button onClick={getPassword_reset_tokens}>Show Password_reset_tokens</button>

        {password_reset_tokensList.map((val, key) => {
          return (
            <div className="password_reset_tokens">
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
                    updatePassword_reset_tokensWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deletePassword_reset_tokens(val.id);
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

export default Password_reset_tokens;