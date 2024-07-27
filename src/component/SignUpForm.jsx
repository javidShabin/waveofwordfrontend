import { useForm } from "react-hook-form";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

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
        {...register("name", { required: true })}
      />

      {errors.name && <span>This field is required</span>}

      <label htmlFor="email">Email</label>
      <input
        className="mb-2 border border-indigo-600 py-2 rounded-md"
        type="email"
        id="email"
        {...register("email", { required: true })}
      />

      {errors.email && <span>This field is required</span>}

      <label htmlFor="password">Password</label>
      <input
        className="mb-2 border border-indigo-600 py-2 rounded-md"
        type="password"
        id="password"
        {...register("password", { required: true })}
      />

      {errors.password && <span>This field is required</span>}

      {/* Sign up button */}
      <input
        className="mt-6 p-2 bg-indigo-800 text-white rounded-md"
        type="submit"
      />
    </form>
  );
}
