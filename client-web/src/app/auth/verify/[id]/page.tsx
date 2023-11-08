import "../../styles/auth.scss";

import { verify } from "../../actions";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default function AuthMailVerify({ params: { id } }: Props) {
  return (
    <section className="container">
      <form action={verify} className="container__form">
        <fieldset>
          <legend className="verify">Verify your account</legend>
          <p>Enter your verification code to bottom input</p>
          <input
            type="number"
            name="code"
            autoComplete="off"
            maxLength={6}
            minLength={1}
          />
          <input type="hidden" value={id} name="uuid" />
          <button>Submit</button>
          <button>Send again</button>
        </fieldset>
      </form>

      <Link href={"/"}>
        <button className="container__float">Home</button>
      </Link>
    </section>
  );
}
