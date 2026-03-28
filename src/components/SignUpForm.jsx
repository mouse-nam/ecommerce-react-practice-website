import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmitClick(data) {
    alert(`Clicked by ${data.email} with pass: ${data.password}`);
  }

  return (
    <div
      style={{ maxWidth: 400, margin: "2rem auto", border: "1px solid red" }}
    >
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div>
          <label>
            Email :
            <input
              type="email"
              placeholder="example@email.com"
              {...register("email", {
                required: "Where is your email?",
              })}
            />
          </label>
          {errors.email && (
            <p style={{ color: "crimson" }}> {errors.email.message} </p>
          )}
        </div>
        <div>
          <label>
            Password :
            <input
              type="password"
              placeholder="****"
              {...register("password", {
                required: "Where is your pass?",
                minLength: {
                  value: 3,
                  message: "minimum 3",
                },
              })}
            />
          </label>
          {errors.password && (
            <p style={{ color: "crimson" }}> {errors.password.message} </p>
          )}
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
