import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { GoogleLoginCard } from "@/components/auth/GoogleLoginCard";

export const metadata: Metadata = {
  title: "Login",
  description: "Protected access for Karuppa via Google sign-in.",
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return <GoogleLoginCard />;
}
