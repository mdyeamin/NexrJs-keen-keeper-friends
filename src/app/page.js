import Image from "next/image";
import Header from "./components/Home/Header";
import AllFriends from "./components/Home/AllFriends";
import { Geist } from "next/font/google";
import Footer from "./components/Shared/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <>
    <Header />
    <AllFriends/>
    <Footer/>
    </>
  );
}
