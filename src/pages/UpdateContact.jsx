import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateContact() {
 const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    company: "",
    photo: "",
    groupId: "",
  });
  const [allGroups, setAllGroups] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false); // To differentiate between add and update

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/groups");
        const data = await response.json();
        setAllGroups(data);
        
        if (id) {
          setIsUpdating(true);
          const contactResponse = await fetch(`http://localhost:5000/contacts/${id}`);
          const contactData = await contactResponse.json();
          setFormData(contactData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const method = isUpdating ? "PUT" : "POST";
      const res = await fetch(`http://localhost:5000/contacts${isUpdating ? `/${id}` : ''}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(isUpdating ? "Contact updated:" : "Contact added:", data);
      setFormData({
        id: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        photo: "",
        groupId: "",
      });
      navigate("/"); 
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  return (
    <div className="container">
      <h1>{isUpdating ? "Update Contact" : "Add New Contact"}</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
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
                readOnly={isUpdating}
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
                required
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
                required
              />
            </li>
            <li className="list-group-item">
              <input
                type="text"
                name="mobile"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Mobile :"
                required
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
                placeholder="Image :"
              />
            </li>
            <li className="list-group-item form-control">
              <select
                className="form-control"
                name="groupId"
                value={formData.groupId}
                onChange={handleChange}
                required
              >
                <option selected disabled hidden>
                  Select Group
                </option>
                {allGroups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mt-3">
          <img
            style={{ width: 200 + "px" }}
            src={formData.photo || 'default_image_url.jpg'}
            alt="Profile"
          />
        </div>
      </div>
      <div className="mt-3 ms-2 me-2 d-flex justify-content-between">
        <div>
          <button className="btn btn-outline-info" onClick={() => navigate("/")}>
            <i className="fa-solid fa-circle-chevron-left"></i> Back
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            {isUpdating ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};


export default UpdateContact