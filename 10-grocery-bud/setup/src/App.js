import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getListInLocalStorage = () => {
  let list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getListInLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const setEdit = (id, title) => {
    setIsEditing(true);
    setName(title);
    setEditID(id);
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert((prevAlert) => ({ ...prevAlert, show, msg, type }));
  };

  const clearList = () => {
    showAlert(true, "List cleared", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "Item removed", "danger");
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      showAlert(true, "please enter a value!", "danger");
    } else if (name && isEditing) {
      showAlert(true, "Item editted", "success");
      setList((prevList) =>
        prevList.map((item) =>
          item.id === editID ? { ...item, title: name } : item
        )
      );
      setIsEditing(false);
      setEditID(null);
      setName("");
    } else {
      showAlert(true, "Item added", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList((prevList) => [...prevList, newItem]);
      setName("");
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} removeAlert={() => showAlert(false)} list={list} />
        )}
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} setEdit={setEdit} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
