import Head from "next/head";
import SideBar from "./SideBar";




export default function DefaultLayout({ children }: { children?: JSX.Element }) {

    return (
        <div>
            <div className="grid lg:min-h-screen    bg-white ">



                <div className="grid md:grid-cols-sidebar ">
                    <SideBar />
                    <div
                        className=" min-h-screen      "
                    >
                        <Head>
                            <title>Swoopi</title>
                            <meta name="description" content="" />
                            <link rel="icon" href="/logo.ico" />
                        </Head>

                        {children}

                    </div>

                </div>
            </div>


        </div>
    );


}


