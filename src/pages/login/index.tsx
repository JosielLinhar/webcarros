import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Container } from "../../components/container";

export function Login() {
  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img src={logoImg} alt="Logo do site" className="w-full" />
        </Link>

        <form></form>
      </div>
    </Container>
  );
}
