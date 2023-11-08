"use server";

import { redirect } from "next/navigation";

export async function auth(data: FormData) {
  const login = data.get("login");
  const password = data.get("password");

  const values = {
    login,
    password,
  };

  console.table(values);
}

export async function register(data: FormData) {
  if (!data) return console.error("register::data is empty");

  redirect("/auth/verify");
}

export async function verify(data: FormData) {
  const code = data.get("code");
  const id = data.get("uuid");
  
  if (!id) return console.error("verify::id is empty");

  console.log(code, id);
}
