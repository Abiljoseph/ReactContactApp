
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ViewContact() {
const [contact , setContact] = useState("")
const [groupName,setGroupName] = useState("")

  const navigate = useNavigate();

  return (
 <div className="container">
      <h1>Contact Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt animi,
        a error, dicta ad ab unde repudiandae atque itaque voluptates saepe tenetur,
        quia ipsum fugiat excepturi impedit quod. Maxime? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Magni nisi ad dignissimos alias maxime quia
        tenetur nam saepe officiis explicabo veniam similique corporis odio fuga,
        adipisci mollitia iusto aliquam sunt!
      </p>
      <div className="row">
        <div className="col-md-4 mt-3 d-flex align-items-center">
          <img style={{ width: '300px' }} alt="contact-img" src={contact.photo} />
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
              Group : <b>{groupName}</b>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-outline-info" onClick={() => navigate('/')}>
            <i className="fa-solid fa-circle-chevron-left"></i> Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewContact
