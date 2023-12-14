import { useState } from "react";
import Axios from "axios";

function Websitemanagements() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [websitemanagementsList, setWebsitemanagementsList] = useState([]);

  const addWebsitemanagements = () => {
    Axios.post("http://localhost:8802/websitemanagements/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setWebsitemanagementsList([
        ...websitemanagementsList,
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

  const getWebsitemanagements = () => {
    Axios.get("http://localhost:8802/websitemanagements/all").then((response) => {
      setWebsitemanagementsList(response.data);
    });
  };

  const updateWebsitemanagementsWage = (id) => {
    Axios.put("http://localhost:8802/websitemanagements/update", { wage: newWage, id: id }).then(
      (response) => {
        setWebsitemanagementsList(
          websitemanagementsList.map((val) => {
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

  const deleteWebsitemanagements = (id) => {
    Axios.delete(`http://localhost:8802/websitemanagements/delete/${id}`).then((response) => {
      setWebsitemanagementsList(
        websitemanagementsList.filter((val) => {
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
        <button onClick={addWebsitemanagements}>Add Websitemanagements</button>
      </div>
      <div className="websitemanagements">
        <button onClick={getWebsitemanagements}>Show Websitemanagements</button>

        {websitemanagementsList.map((val, key) => {
          return (
            <div className="websitemanagements">
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
                    updateWebsitemanagementsWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteWebsitemanagements(val.id);
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

export default Websitemanagements;