import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    age: ""
  })
  
  function handleChange(event) {
     setFormData({
      ...formData,
     [event.target.name]: event.target.value
     });
    }

  function handleSubmit(event) {
    event.preventDefault();

    const newError = {
      name: "",
      email: "",
      age: ""
    }

    if(formData.name.trim() === ""){
      newError.name = "Name is Required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(formData.email)) {
  newError.email = "Enter a valid email";
}

    if(formData.email.trim() === ""){
      newError.email = "email is required";
    }

     if (formData.age === "") {
      newError.age = "Age is required";
    } else if (Number(formData.age) < 18) {
      newError.age = "Age must be 18 or above";
    }

    setError(newError);

    if (
      newError.name === "" && 
      newError.email === ""  &&
      newError.age === ""
    ){
    console.log("Name:", formData.name);
    console.log("Email:",formData.email);
    console.log("Age:", formData.age);

    console.log("Form submitted successfully!");
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name = "name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      {error.name && <p>{error.name}</p> }

      <input
        type="email"
        name = "email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      {error.email && <p>{error.email}</p> }

      <input
        type="number"
        name = "age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      {error.age && <p>{error.age}</p> }

      <button type="submit">
        Submit
      </button>

    </form>

    <p>Name: {formData.name}</p>
    <p>Email: {formData.email}</p>
    <p>Age: {formData.age}</p>
   </>
  );
}

export default Form;