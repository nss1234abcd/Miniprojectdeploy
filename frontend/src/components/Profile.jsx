// import { useEffect, useState } from "react";
// import API from "../api";

// function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const res = await API.get("/auth/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`, // ✅ FIXED
//           },
//         });

//         setUser(res.data);
//       } catch (err) {
//         console.log("ERROR:", err.response?.data);
//         alert("Please login again");
//       }
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <div>
//       <h2>Profile</h2>

//       {user ? (
//         <>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>

//           {user.image && (
//             <img
//               src={`http://localhost:5000/uploads/${user.image}`}
//               width="150"
//               alt="profile"
//             />
//           )}
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Profile;

import { useEffect, useState } from "react";
import API from "../api";

function Profile(){
  const[user, setUser]=useState(null);

  useEffect(()=> {
    const fetchProfile = async()=>{
      const res = await API.get("/auth/profile", {
        headers:{
          Authorization:localStorage.getItem("token")
        }
      });
      setUser(res.data);
    };
    fetchProfile();
  },[]);

   return (
    <div>
      <h2>Profile</h2>

      {user && (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>

          {user?.image && (
        <img src={`http://localhost:5000/uploads/${user.image}`} width="150" alt="profile"/>
      )}
      </>
      )}
    </div>
  );
}

export default Profile;