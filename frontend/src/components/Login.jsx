import { useState } from "react";
import API from "../api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    // ✅ Validation
    if (!form.email || !form.password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await API.post("/auth/login", form);

      // ✅ Save token
      localStorage.setItem("token", res.data.token);

      alert("Login Success");

      // (Optional) clear form
      setForm({ email: "", password: "" });

    } catch (err) {
      console.log("ERROR:", err.response?.data);

      // ✅ Show proper backend error
      alert(
        err.response?.data?.msg ||
        err.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;

// import { useState } from "react";
// import API from "../api";

// function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const login = async () => {
//     const res = await API.post("/auth/login", form);
//     localStorage.setItem("token", res.data.token);
//     alert("Login Success");
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <input
//         placeholder="Email"
//         onChange={(e) =>
//           setForm({ ...form, email: e.target.value })
//         }
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) =>
//           setForm({ ...form, password: e.target.value })
//         }
//       />

//       <button onClick={login}>Login</button>
//     </div>
//   );
// }

// export default Login;