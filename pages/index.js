import Head from "next/head";
import NavbarMenu from "../components/NavbarMenu";
import HomePage from "../components/NavbarMenu";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      {/* <header>
        <NavbarMenu />
      </header> */}
      <main>
        <HomePage />
      </main>
      <footer></footer>
    </div>
  );
}
