import { useForm } from "react-hook-form";

const App = () => {
  console.log("app rendering..");
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  console.log(errors);

  return (
    <div className="h-screen bg-black text-white flex justify-center items-center flex-col gap-4">
      <h1>React hook form</h1>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
        className="p-4 border border-white rounded-xl  flex flex-col gap-5 w-80"
        action=""
      >
        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="p-2 border border-white rounded outline-0"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is required",
          })}
          className="p-2 border border-white rounded outline-0"
          type="text"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum 8 characters are required",
            },
          })}
          className="p-2 border border-white rounded outline-0"
          type="text"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}

        <input
          {...register("mobile", {
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Invalid mobile number",
            },
          })}
          className="p-2 border border-white rounded outline-0"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-600">{errors.mobile.message}</p>
        )}

        <button className="p-2 bg-blue-700 text-white border-0 rounded cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
