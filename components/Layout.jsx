import Head from "next/head";
import { Box } from '@chakra-ui/react'
import { Children } from "react/cjs/react.production.min";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Box maxWidth="1280" m="auto">
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </div>
    )
}

export default Layout
