import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddContact() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    photo: "",
    groupId: "",
  });
  const [allGroups, setAllGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/groups");
        const data = await response.json();
        setAllGroups(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const addContact = async () => {
      try {
        const res = await fetch("http://localhost:5000/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log("Contact added:", data);
        setFormData({});
        navigate("/");
      } catch (error) {
        console.error("Error adding contact:", error);
      }
    };
    addContact();
  };
  return (
    <div className="container">
      <h1>Add New Contact</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum....
      </p>
      <div className="row">
        <div className="col-md-6 mt-3">
          <ul className="list-group border-none">
            <li className="list-group-item border-none">
              <input
                type="text"
                name="id"
                value={formData.id}
                placeholder="Contact ID"
                onChange={handleChange}
                className="form-control"
              />
            </li>
            <li className="list-group-item">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Name :"
              />
            </li>
            <li className="list-group-item">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email :"
              />
            </li>
            <li className="list-group-item">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Mobile :"
              />
            </li>
            <li className="list-group-item">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-control"
                placeholder="Company :"
              />
            </li>
            <li className="list-group-item">
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className="form-control"
                placeholder="image :"
              />
            </li>
            <li className="list-group-item form-control">
              <div className="dropdown">
                <select
                  className="form-control"
                  name="groupId"
                  id="groupId"
                  value={formData.groupId}
                  onChange={handleChange}
                >
                  <option selected disabled hidden>
                    Select Group
                    {formData.groupId}
                  </option>
                  {allGroups.length > 0 ? (
                    allGroups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))
                  ) : (
                    <div>No group</div>
                  )}
                </select>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mt-3">
          <img
            style={{ width: 200 + "px" }}
            src={formData.photo}
            alt="pro-image"
          />
        </div>
      </div>
      <div className="mt-3 ms-2 me-2 d-flex justify-content-between">
        <div>
          <a href="/" className="btn btn-outline-info">
            <i className="fa-solid fa-circle-chevron-left"></i> Back
          </a>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
