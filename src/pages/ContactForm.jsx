import React from 'react';
import './patient.css';
import { useEffect, useState} from 'react';
import { db } from "../firebase"; 
import { collection,
         getDocs,
         doc,
         addDoc,
} from "firebase/firestore";

function ContactForm() {
  const [users, setUsers] = useState([]);
  const [newName , setnewName] = useState("");
  const [newAge , setnewAge] = useState(0);
  const [newMessage , setnewMessage] = useState("");
  const userCollectionRef = collection( db , "users");

  const createUser = async () =>{
    await addDoc(userCollectionRef , {name : newName , age : Number(newAge)  , message : newMessage })

  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) =>({ ...doc.data(), id: doc.id})));
    };


  getUsers();
  }, []);

  return (
    <div className="container contact-form" id='body' >
      <div className="contact-image">
        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
      </div>
      <form onSubmit={createUser}>
        <h3>Drop Us a Message</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" name="txtName" className="form-control"
               placeholder="Your Name *"
                onChange={(event) =>{
                setnewName(event.target.value);
              }}/>
            </div>
           
            <div className="form-group">
              <input type="number" name="txtPhone" className="form-control" 
               placeholder="Your Age *"
               onChange={(event) =>{
                setnewAge(event.target.value);
              }} />
            </div>
            <div className="form-group">
              <button type="submit" name="btnSubmit" className="btnContact"> Send Message </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea name="txtMsg" className="form-control1" 
              placeholder="Your Story *" 
              style={{ width: '100%', height: '150px' }}
              onChange={(event) =>{
                setnewMessage(event.target.value);
              }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
