import Head from "next/head";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Home from "./screens/home/Home";


const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Home  />
    </>
  );
}
