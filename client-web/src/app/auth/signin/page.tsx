import Link from "next/link";

import "../styles/auth.scss";

import { auth } from "../actions";

export default function SignIn() {
  return (
    <section className="container">
      <form action={auth} className="container__form">
        <fieldset>
          <legend>Authorization</legend>
          <input
            type="text"
            name="login"
            placeholder="Input your login"
            autoComplete="username"
          />
          <input
            type="password"
            name="password"
            placeholder="Input your password"
          />
          <button className="btn__active">Sign In</button>
          <button>
            <Link href={"/auth/signup"}>Sign Up</Link>
          </button>
        </fieldset>
      </form>

      <Link href={"/"}>
        <button className="container__float">Home</button>
      </Link>
    </section>
  );
}
