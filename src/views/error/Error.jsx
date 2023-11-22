import { Link } from "react-router-dom";
import transition from "../../transitions/transition";

function Error() {
  return (
    <section className="flex flex-col items-center gap-2 justify-center h-[75vh]">
      <h5 className="text-5xl text-[#171717] font-medium">
        404: Página no encontrada
      </h5>
      <Link to="/" className="text-xl text-blue-800">
        Regresar al inicio
      </Link>
    </section>
  );
}

const ErrorWithTransition = transition(Error);
export default ErrorWithTransition;
