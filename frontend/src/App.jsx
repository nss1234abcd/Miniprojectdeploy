import { useState } from "react";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Upload from "./components/Upload";
import "./App.css";

function App() {
  const [page, setPage] = useState("signup");

  return (
    <div className="container">
      <h1>🚀 Auth + Upload App</h1>

      {/* Navigation Buttons */}
      <button onClick={() => setPage("signup")}>Signup</button>
      <button onClick={() => setPage("login")}>Login</button>
      <button onClick={() => setPage("upload")}>Upload</button>
      <button onClick={() => setPage("profile")}>Profile</button>

      <hr />

      {/* Page Rendering */}
      {page === "signup" && <Signup />}
      {page === "login" && <Login />}
      {page === "upload" && <Upload />}
      {page === "profile" && <Profile />}
    </div>
  );
}

export default App;

// import Profile from "./components/Profile";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Upload from "./components/Upload";
// // import "./App.css";

// function App() {
//   return (
//     <div>

//       <h1>🚀 Auth + Upload App</h1>

//           <Signup />
//           <Login />
//           <Upload />
//           <Profile />
//       </div>
//   );
// }

// export default App;








// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Upload from "./components/Upload";
// import Profile from "./components/Profile";
// import "./App.css";

// function App() {
//   return (
//     <div className="app">

//       <h1 className="title">🚀 Auth + Upload App</h1>

//       <div className="container">

//         <div className="card">
//           <Signup />
//         </div>

//         <div className="card">
//           <Login />
//         </div>

//         <div className="card">
//           <Upload />
//         </div>

//         <div className="card">
//           <Profile />
//         </div>

//       </div>

//     </div>
//   );
// }

// export default App;




// import { useState } from "react";
// import API from "./api"; // 👈 import your axios instance
// import "./App.css";

// function App() {
//   const [file, setFile] = useState(null);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // ✅ Signup function
//   const handleSignup = async () => {
//     try {
//       const res = await API.post("/signup", {
//         name,
//         email,
//         password,
//       });

//       console.log(res.data);
//       alert("Signup successful!");

//       // optional: clear fields
//       setName("");
//       setEmail("");
//       setPassword("");

//     } catch (error) {
//       console.log(error);
//       alert("Signup failed!");
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Auth + Upload App</h1>

//       {/* Signup */}
//       <div className="card">
//         <h2>Signup</h2>
//         <div className="form">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="btn" onClick={handleSignup}>
//             Signup
//           </button>
//         </div>
//       </div>

//       {/* Login */}
//       <div className="card">
//         <h2>Login</h2>
//         <div className="form">
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button className="btn">Login</button>
//         </div>
//       </div>

//       {/* Upload */}
//       <div className="card">
//         <h2>Upload Image</h2>
//         <input
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <button className="btn">Upload</button>
//       </div>

//       {/* Profile */}
//       <div className="card">
//         <h2>Profile</h2>
//         <div className="profile-box">
//           <p>No user logged in</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;