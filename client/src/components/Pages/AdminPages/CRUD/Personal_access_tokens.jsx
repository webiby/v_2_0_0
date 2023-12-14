import { useState } from "react";
import Axios from "axios";

function Personal_access_tokens() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [personal_access_tokensList, setPersonal_access_tokensList] = useState([]);

  const addPersonal_access_tokens = () => {
    Axios.post("http://localhost:8802/personal_access_tokens/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setPersonal_access_tokensList([
        ...personal_access_tokensList,
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

  const getPersonal_access_tokens = () => {
    Axios.get("http://localhost:8802/personal_access_tokens/all").then((response) => {
      setPersonal_access_tokensList(response.data);
    });
  };

  const updatePersonal_access_tokensWage = (id) => {
    Axios.put("http://localhost:8802/personal_access_tokens/update", { wage: newWage, id: id }).then(
      (response) => {
        setPersonal_access_tokensList(
          personal_access_tokensList.map((val) => {
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

  const deletePersonal_access_tokens = (id) => {
    Axios.delete(`http://localhost:8802/personal_access_tokens/delete/${id}`).then((response) => {
      setPersonal_access_tokensList(
        personal_access_tokensList.filter((val) => {
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
        <button onClick={addPersonal_access_tokens}>Add Personal_access_tokens</button>
      </div>
      <div className="personal_access_tokens">
        <button onClick={getPersonal_access_tokens}>Show Personal_access_tokens</button>

        {personal_access_tokensList.map((val, key) => {
          return (
            <div className="personal_access_tokens">
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
                    updatePersonal_access_tokensWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deletePersonal_access_tokens(val.id);
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

export default Personal_access_tokens;