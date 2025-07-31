import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

//To Prevent the form from submitting immediately, we can use an async function
  // This allows us to simulate a delay (e.g., for an API call) before the form submission is processed.
  async function onSubmit(data) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("submitting the data", data);
  }

  return (
    // Form with three fields: first name, middle name, and last name. Example of using react-hook-form
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name:</label>
        {/* Register firstName with validation: required, minLength 2, maxLength 20 */}
        <input
          {...register("firstName", {
            required: true,
            minLength: {
              value: 2,
              message: "First name must be at least 2 characters long.",
            },
            maxLength: {
              value: 20,
              message: "First name must be at most 20 characters long.",
            },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label> Middle Name:</label>
        {/* Register middleName with validation: required */}
        <input
          {...register("middleName", {
            required: "Please enter your middle name.",
          })}
        />
      </div>
      <br />

      <div>
        <label> Last Name:</label>
        {/* Register lastName with validation: required and pattern */}
        <input
          {...register("lastName", {
            required: true,
            pattern: {
              value: /^[A-Za-z]+$/i,
              // This pattern allows only letters (A-Z, a-z)
              message: "Last name must contain only letters.",
            },
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <br />
      
      <input type="submit" disabled={isSubmitting}  value={isSubmitting ? "Submitting..." : "Submit"} />
    </form>
  );
};

export default App;
