import { useState } from "react";
import Axios from "axios";

function Failed_jobs() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [failed_jobsList, setFailed_jobsList] = useState([]);

  const addFailed_jobs = () => {
    Axios.post("http://localhost:8802/failed_jobs/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setFailed_jobsList([
        ...failed_jobsList,
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

  const getFailed_jobs = () => {
    Axios.get("http://localhost:8802/failed_jobs/all").then((response) => {
      setFailed_jobsList(response.data);
    });
  };

  const updateFailed_jobsWage = (id) => {
    Axios.put("http://localhost:8802/failed_jobs/update", { wage: newWage, id: id }).then(
      (response) => {
        setFailed_jobsList(
          failed_jobsList.map((val) => {
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

  const deleteFailed_jobs = (id) => {
    Axios.delete(`http://localhost:8802/failed_jobs/delete/${id}`).then((response) => {
      setFailed_jobsList(
        failed_jobsList.filter((val) => {
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
        <button onClick={addFailed_jobs}>Add Failed_jobs</button>
      </div>
      <div className="failed_jobs">
        <button onClick={getFailed_jobs}>Show Failed_jobs</button>

        {failed_jobsList.map((val, key) => {
          return (
            <div className="failed_jobs">
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
                    updateFailed_jobsWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteFailed_jobs(val.id);
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

export default Failed_jobs;