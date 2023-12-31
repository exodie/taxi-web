import Link from "next/link";

import "../styles/auth.scss";

import { register } from "../actions";

export default function SignUp() {
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
          <button className="btn__active">Sign Up</button>
          <button>
            <Link href={"/auth/signin"}>Sign In</Link>
          </button>
        </fieldset>
      </form>

      <Link href={"/"}>
        <button className="container__float">Home</button>
      </Link>
    </section>
  );
}
