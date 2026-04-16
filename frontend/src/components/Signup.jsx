import { useState } from "react";
import API from "../api";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    // ✅ Frontend validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await API.post("/auth/signup", form);

      // ✅ Success message
      alert(res.data.message || "Signup Successful");

      // ✅ Clear form
      setForm({ name: "", email: "", password: "" });

    } catch (err) {
      console.log("ERROR:", err.response?.data);

      // ✅ Show backend error properly
      alert(
        err.response?.data?.message ||
        err.response?.data ||
        "Signup Failed"
      );
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

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

      <button onClick={submit}>Signup</button>
    </div>
  );
}

export default Signup;


// import { useState } from "react";
// import API from "../api";

// function Signup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const submit = async () => {
//     await API.post("/auth/signup", form);
//     alert("Signup Successful");
//   };
//   return (
//     <div>
//       <h2>Signup</h2>
//       <input placeholder="Name" onChange={(e) =>setForm({ ...form, name: e.target.value }) } />
//       <input placeholder="Email"onChange={(e) =>setForm({ ...form, email: e.target.value })}/>
//       <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })}/>
//       <button onClick={submit}>Signup</button>
//     </div>
//   );
// }
// export default Signup;