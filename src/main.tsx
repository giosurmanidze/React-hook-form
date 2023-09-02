import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



// import { useForm, SubmitHandler } from "react-hook-form";

// interface IFormInput {
//   firstName: string;
//   mail: string;
//   gender: string;
// }

// export default function App() {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm<IFormInput>();
//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       autoComplete="off"
//       className="flex flex-col justify-center gap-5 items-center mt-20"
//     >
//       <input
//         className="bg-black text-white pl-2 pr-5 py-1"
//         {...register("firstName", { required: true, minLength: 7 })}
//       />
//       {errors.firstName?.type === "required" && (
//         <p role="alert">First name is required</p>
//       )}
//       {errors.firstName?.type === "minLength" && (
//         <p role="alert">min length is 7</p>
//       )}

//       <input
//         className="bg-black text-white pl-2 pr-5 py-1"
//         {...register("mail", { required: "Email Address is required" })}
//       />
//       {errors.mail && <p role="alert">{errors.mail.message}</p>}

//       <label>Gender Selection</label>
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }
