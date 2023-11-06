import "../styles/auth.scss";

import { verify } from "../actions";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default function AuthMailVerify({ params: { id } }: Props) {
  return (
    <section className="container">
      <form className="container__form">
        <fieldset>
          <legend className="verify">Verify your account</legend>
          <p>Enter your verification code to bottom input</p>
          <input type="number" name="id" autoComplete="off" />
          <button>Submit</button>
          <button>Send again</button>
        </fieldset>
      </form>

      <button className="container__float">
        <Link href={"/"}>Home</Link>
      </button>
    </section>
  );
}
