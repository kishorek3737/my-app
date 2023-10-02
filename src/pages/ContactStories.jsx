import React from 'react';
import { useEffect, useState} from 'react';
import { db } from "../firebase"; 
import { collection,
         getDocs,
         doc,
         addDoc,
} from "firebase/firestore";

const ContactStories = () => {
     const [users, setUsers] = useState([]);
     const userCollectionRef = collection( db , "users");


    useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) =>({ ...doc.data(), id: doc.id})));
    };


  getUsers();
  }, []);
  return (
    <div>
        {users.map((user) => {
            return(
                <div>
                    {"  "}
                    <div className="story">
        <div className="story1">
          <div id="sss">
            <h6 style={{ fontFamily: "'Rozha One', serif", margin: '4%' }}><b>Patient Stories</b></h6>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif" }}>
           {user.message}
          </p>
          <div className="story2">
            <p href="/ContactForm" style={{ marginTop: '10px' }}>Name:{user.name}</p>
            <p href="/ContactStories" style={{ marginTop: '10px' }}>Age:{user.age}</p>
          </div>
        </div>
      </div>
                </div>
            )
        })}
    </div>
  )
}

export default ContactStories;