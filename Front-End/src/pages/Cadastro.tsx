import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import '../styles.scss'

type Inputs = {
  nome: string,
  localizacao: string,
};

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/animais', data);
      console.log("Formulario enviado com sucesso", response.data)
    } catch (error) {
      console.error("Erro ao enviar formulario: ", error)
    }
  }

  return (
    <div className="container">
    < form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome", { required: true })} />

      <input {...register("localizacao", { required: true })} />
      {errors.nome || errors.localizacao ? <span>Preencha o campo, por favor!</span> : ''}

      <input type="submit" />
    </form>
    </div>
  );
}