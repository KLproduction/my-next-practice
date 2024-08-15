import Image from "next/image";
import Navbar from "../components/Navbar";
import BigPhoto from "./photos/page";
import { Suspense } from "react";
import GeneratePost from "@/components/GeneratePost";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1>brach test</h1>
      <GeneratePost />
      <p>T3</p>
    </main>
  );
}
