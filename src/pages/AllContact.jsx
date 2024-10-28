import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllContacts = () => {
  const [searchKey, setSearchKey] = useState("");
  const [allContacts, setAllContacts] = useState([]);

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/contacts");
        const data = await response.json();
        setAllContacts(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //  const handleDelete = async (id) => {
  //    try {
  //      const response = await fetch(`http://localhost:5000/contacts?id=${id}`,{
  //        method: "DELETE",
  //      });
  //      if (response.ok) {
  //        console.log("Contact deleted successfully");
  //      } else {
  //        console.log("Failed to delete contact");
  //      }
  //    } catch (error) {
  //      console.error("Error deleting contact:", error);
  //    }
  //  };

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col">
          <h1>
            Contact Management App &nbsp;
            <Link to="/add-contact" className="btn btn-success">
              <i className="fa-solid fa-user-plus"></i> Add new
            </Link>
          </h1>
        </div>
      </div>
      <p className="mt-4" style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        impedit minima fugiat repellat. Dolore accusamus nisi voluptatum aliquam
        numquam officiis voluptate, commodi itaque odio, magni est illo tempore,
        enim facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis ratione maxime quod facilis libero aliquam reiciendis debitis
        numquam doloribus veniam, illo laborum praesentium est consequuntur
        natus inventore dicta nisi voluptates.
      </p>
      <div className="row">
        <div className="col-lg-6">
          <form>
            <input
              type="text"
              name="searchKey"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="search contact here"
              className="form-control mt-2"
            />
          </form>
        </div>
        <div className="col-lg-6">
          <button type="button" className="btn btn-primary mt-2" disabled>
            Search
          </button>
        </div>
      </div>
      <div className="m-2">
        <div className="row">
          {filteredContacts.map((data) => (
            <div className="card col-lg-6 mt-1" key={data.id}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      height="150px"
                      width="100px"
                      src={data.photo}
                      alt={data.name}
                    />
                  </div>
                  <div className="col-md-8 mt-3">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Name: <b>{data.name}</b>
                      </li>
                      <li className="list-group-item">
                        mobile: <b>{data.phone}</b>
                      </li>
                      <li className="list-group-item">
                        Email: <b>{data.email}</b>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                    <Link
                      to={`/view-contact/${data.id}`}
                      className="btn btn-success mt-1"
                    >
                      <i className="fa-regular fa-eye"></i>
                    </Link>
                    <Link
                      to={`/update-contact/${data.id}`}
                      className="btn btn-warning mt-1"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="btn btn-danger mt-1"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllContacts;
