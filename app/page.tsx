import HomePage from "../components/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Hands Pharmacy - Your Trusted Digital Healthcare Partner in Pakistan",
  description: "Professional licensed pharmacy in Karachi offering genuine prescription medications, AI health assistant, medicine delivery, and expert pharmaceutical care. Download our free app for 24/7 healthcare access.",
};

export default function Home() {
  return <HomePage />;
}