import { useState } from "react";
import Axios from "axios";

function Paymentouts() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [paymentoutsList, setPaymentoutsList] = useState([]);

  const addPaymentouts = () => {
    Axios.post("http://localhost:8802/paymentouts/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setPaymentoutsList([
        ...paymentoutsList,
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

  const getPaymentouts = () => {
    Axios.get("http://localhost:8802/paymentouts/all").then((response) => {
      setPaymentoutsList(response.data);
    });
  };

  const updatePaymentoutsWage = (id) => {
    Axios.put("http://localhost:8802/paymentouts/update", { wage: newWage, id: id }).then(
      (response) => {
        setPaymentoutsList(
          paymentoutsList.map((val) => {
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

  const deletePaymentouts = (id) => {
    Axios.delete(`http://localhost:8802/paymentouts/delete/${id}`).then((response) => {
      setPaymentoutsList(
        paymentoutsList.filter((val) => {
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
        <button onClick={addPaymentouts}>Add Paymentouts</button>
      </div>
      <div className="paymentouts">
        <button onClick={getPaymentouts}>Show Paymentouts</button>

        {paymentoutsList.map((val, key) => {
          return (
            <div className="paymentouts">
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
                    updatePaymentoutsWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deletePaymentouts(val.id);
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

export default Paymentouts;