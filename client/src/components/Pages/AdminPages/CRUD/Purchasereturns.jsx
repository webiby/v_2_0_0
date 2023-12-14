import { useState } from "react";
import Axios from "axios";

function Purchasereturns() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [purchasereturnsList, setPurchasereturnsList] = useState([]);

  const addPurchasereturns = () => {
    Axios.post("http://localhost:8802/purchasereturns/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setPurchasereturnsList([
        ...purchasereturnsList,
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

  const getPurchasereturns = () => {
    Axios.get("http://localhost:8802/purchasereturns/all").then((response) => {
      setPurchasereturnsList(response.data);
    });
  };

  const updatePurchasereturnsWage = (id) => {
    Axios.put("http://localhost:8802/purchasereturns/update", { wage: newWage, id: id }).then(
      (response) => {
        setPurchasereturnsList(
          purchasereturnsList.map((val) => {
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

  const deletePurchasereturns = (id) => {
    Axios.delete(`http://localhost:8802/purchasereturns/delete/${id}`).then((response) => {
      setPurchasereturnsList(
        purchasereturnsList.filter((val) => {
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
        <button onClick={addPurchasereturns}>Add Purchasereturns</button>
      </div>
      <div className="purchasereturns">
        <button onClick={getPurchasereturns}>Show Purchasereturns</button>

        {purchasereturnsList.map((val, key) => {
          return (
            <div className="purchasereturns">
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
                    updatePurchasereturnsWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deletePurchasereturns(val.id);
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

export default Purchasereturns;