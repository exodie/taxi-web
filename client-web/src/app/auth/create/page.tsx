import Link from "next/link";

import "../styles/auth.scss";

import { register } from "../actions";

export default function AuthCreate() {
  return (
    <section className="container">
      <form action={register} className="container__form">
        <fieldset>
          <legend>Registration</legend>
          <input
            type="text"
            name="login"
            placeholder="Input your login"
            autoComplete="username"
          />
          <input type="password" placeholder="Input your password" />
          <input
            type="email"
            name="email"
            placeholder="Input your email"
            autoComplete="email"
          />
          <button>Submit</button>
          <button>
            <Link href={"/auth"}>Sign In</Link>
          </button>
        </fieldset>
      </form>

      <button className="container__float">
        <Link href={"/"}>Home</Link>
      </button>
    </section>
  );
}
