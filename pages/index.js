import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "./homePage";
import Services from "./services";
import Work from "./works";

export default function Home() {
    return (
        <div>
            <Head>
                <title>True Jyro ~ Jhonny Rodriguez Portfolio</title>
                <meta
                    name='description'
                    content='Jhonny Rodríguez Martínez Portfolio'
                />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <Navbar />
            <HomePage />
            <Services />
            <Work />
            <Footer />
        </div>
    );
}
