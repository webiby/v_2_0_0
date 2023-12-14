import { useState } from "react";
import Axios from "axios";

function Webibysectionrules() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [webibysectionrulesList, setWebibysectionrulesList] = useState([]);

  const addWebibysectionrules = () => {
    Axios.post("http://localhost:8802/webibysectionrules/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setWebibysectionrulesList([
        ...webibysectionrulesList,
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

  const getWebibysectionrules = () => {
    Axios.get("http://localhost:8802/webibysectionrules/all").then((response) => {
      setWebibysectionrulesList(response.data);
    });
  };

  const updateWebibysectionrulesWage = (id) => {
    Axios.put("http://localhost:8802/webibysectionrules/update", { wage: newWage, id: id }).then(
      (response) => {
        setWebibysectionrulesList(
          webibysectionrulesList.map((val) => {
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

  const deleteWebibysectionrules = (id) => {
    Axios.delete(`http://localhost:8802/webibysectionrules/delete/${id}`).then((response) => {
      setWebibysectionrulesList(
        webibysectionrulesList.filter((val) => {
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
        <button onClick={addWebibysectionrules}>Add Webibysectionrules</button>
      </div>
      <div className="webibysectionrules">
        <button onClick={getWebibysectionrules}>Show Webibysectionrules</button>

        {webibysectionrulesList.map((val, key) => {
          return (
            <div className="webibysectionrules">
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
                    updateWebibysectionrulesWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteWebibysectionrules(val.id);
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

export default Webibysectionrules;