import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "./components/TextField";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
}

const App = () => {
  const {
    handleSubmit,
    formState: { errors },
    ...methods
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center mt-20 flex-col items-center gap-5"
    >
      <TextField
        label="First Name"
        name="firstName"
        register={methods.register}
        error={errors}
      />
      <TextField
        label="Last Name"
        name="lastName"
        register={methods.register}
        error={errors}
        validation={{
          required: "Lastname is required",
          minLength: {
            value: 10,
            message: "Min length should be more than 10",
          },
        }}
      />
      <TextField
        label="Email"
        name="email"
        register={methods.register}
        error={errors}
        validation={{ required: "Email is required" }}
      />

      <button className="bg-black text-white py-2 px-5">Submit</button>
    </form>
  );
};

export default App;
