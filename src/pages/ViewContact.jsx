import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewContact() {
  const [contact, setContact] = useState("");
  const [groupName, setGroupName] = useState("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/contacts/${id}`);
        const data = await response.json();
        setContact(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchGroupName = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/groups/${contact.groupId}`
        );
        const data = await response.json();
        setGroupName(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (contact != "") {
      fetchGroupName();
    }
  }, [groupName]);

  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Contact Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt
        animi, a error, dicta ad ab unde repudiandae atque itaque voluptates
        saepe tenetur, quia ipsum fugiat excepturi impedit quod. Maxime? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Magni nisi ad
        dignissimos alias maxime quia tenetur nam saepe officiis explicabo
        veniam similique corporis odio fuga, adipisci mollitia iusto aliquam
        sunt!
      </p>
      <div className="row">
        <div className="col-md-4 mt-3 d-flex align-items-center">
          <img
            style={{ width: "300px" }}
            alt="contact-img"
            src={contact.photo}
          />
        </div>
        <div className="col-md-8 mt-5">
          <ul className="list-group">
            <li className="list-group-item">
              Name : <b>{contact.name}</b>
            </li>
            <li className="list-group-item">
              Email : <b>{contact.email}</b>
            </li>
            <li className="list-group-item">
              Mob : <b>{contact.phone}</b>
            </li>
            <li className="list-group-item">
              Company : <b>{contact.company}</b>
            </li>
            <li className="list-group-item">
              Group : <b>{contact.groupName}</b>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-outline-info"
            onClick={() => navigate("/")}
          >
            <i className="fa-solid fa-circle-chevron-left"></i> Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewContact;
