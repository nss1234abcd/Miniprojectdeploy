// import { useState } from "react";
// import API from "../api";

// function Upload() {
//   const [file, setFile] = useState(null);

//   const upload = async () => {
//     if (!file) {
//       alert("Please select file");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("image", file);

//       const token = localStorage.getItem("token");

//       await API.post("/auth/upload", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Uploaded successfully!");

//       // ✅ refresh page to update profile image
//       window.location.reload();

//     } catch (err) {
//       console.log(err.response?.data);
//       alert(
//         err.response?.data?.message ||
//         err.response?.data ||
//         "Upload Failed"
//       );
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Image</h2>

//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files[0])}
//       />

//       <button onClick={upload}>Upload</button>
//     </div>
//   );
// }

// export default Upload;

import { useState } from "react";
import API from "../api";

function Upload() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    await API.post("/auth/upload", formData, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    alert("Uploaded!");
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default Upload;