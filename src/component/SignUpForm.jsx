import axios from "axios";
import { useForm } from "react-hook-form";
import ErrorMsg from "./ErrorMsg";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/useres", data)
      .then((response) => console.log("User signed"))
      .catch((error) => console.log("ERROR"));
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mt-4 w-[1000px]"
    >
      <label htmlFor="name">Name</label>
      <input
        className="mb-2 border border-indigo-600 py-2 rounded-md"
        type="text"
        id="name"
        {...register("name", { required: true, maxLength: 15 })}
      />
      {console.log(errors)}
      {errors.name && <ErrorMsg type={errors.name.type} field={"Name"} />}

      <label htmlFor="email">Email</label>
      <input
        className="mb-2 border border-indigo-600 py-2 rounded-md"
        type="email"
        id="email"
        {...register("email", { required: true })}
      />

      {errors.email && <ErrorMsg type={errors.email.type} field={"Email"} />}

      <label htmlFor="password">Password</label>
      <input
        className="mb-2 border border-indigo-600 py-2 rounded-md"
        type="password"
        id="password"
        {...register("password", {
          required: true,
          pattern: {
            value:
              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,12}$/,
          }
        })}
      />

      {errors.password && (
        <ErrorMsg type={errors.password.type} field={"password"} />
      )}

      {/* Sign up button */}
      <input
        className="mt-6 p-2 bg-indigo-800 text-white rounded-md"
        type="submit"
      />
    </form>
  );
}
