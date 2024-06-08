import Image from "next/image";
import Navbar from "../components/Navbar";
import BigPhoto from "./photos/page";
import { Suspense } from "react";
import GeneratePost from "@/components/GeneratePost";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GeneratePost/>
    </main>
  );
}
