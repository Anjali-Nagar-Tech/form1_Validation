import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name) {
      newErrors.name = "Name is required";
    }else if(form.name.length <4){
      newErrors.name = "Atleast 4 characters";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    }else if(!form.email.includes('.com')){
      newErrors.email = "Invalid Format";
    }

    if (!form.contact) {
      newErrors.contact = "Contact is required";
    } else if (form.contact.length !== 10) {
      newErrors.contact = "Must be 10 digits";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      toast.success("Form submitted successfully!");
    }
  };

  return (
    <div className="App">
      <form className="form_validate" onSubmit={handleSubmit}>
        <h1>Validation Form</h1>

        <div className="inner_form">

          <div className="elements">
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} />
            <p>{errors.name}</p>
          </div>

          <div className="elements">
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} />
            <p>{errors.email}</p>
          </div>

          <div className="elements">
            <label>Contact Number:</label>
            <input type="number" name="contact" onChange={handleChange} />
            <p>{errors.contact}</p>
          </div>

          <div className="elements">
            <label>Password:</label>
            <input type="password" name="password" onChange={handleChange} />
            <p>{errors.password}</p>
          </div>

          <div className="btn-element">
            <button type="submit">Submit</button>
          </div>

        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={6000}
        hideProgressBar={false}
      />
    </div>
  );
}

export default App;