import Topo from "../components/topo";
import Service from "../components/service";
import Head from "next/head";
import About from "../components/about";
import Dowload from "../components/dowload";


export default function Home(){

    return(
        <>
            <Head>
                <title>Projeto 1 - Landing Page</title>
            </Head>

            <main>
                <Topo></Topo>
                <Service></Service>
                <About></About>
                <Dowload></Dowload>
            </main>
           
        </>
    );
}