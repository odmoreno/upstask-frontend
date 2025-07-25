import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CreateProjectView() {

  const initialValues = {
    projectName: "",
    clientName: "",
    description: "",
  };

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  const handleForm = (data: any) => {
    console.log(data);
  };


  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear Proyecto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Llena los siguientes campos para crear un proyecto</p>

        <nav className="py-5">
          <Link
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3  text-white font-bold cursor-pointer transition-colors"
            to="/">
            Volver a Proyectos
          </Link>
        </nav>

        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <input
            type="submit"
            value="Crear Proyecto"
            className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          >

          </input>
        </form>
      </div>

    </>
  );
}
