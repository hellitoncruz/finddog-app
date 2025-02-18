import { useForm } from "react-hook-form";

function Cadastro() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Formulário enviado!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("primeiro_nome", { required: true, maxLength: 20 })} />
      <input {...register("ultimo_nome", { maxLength: 20 })} />
      <input type="number" {...register("idade", { min: 18, max: 99 })} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Cadastro;
