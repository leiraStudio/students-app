import './styles/main.scss'
import {Inter} from 'next/font/google'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create Next App', description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (<html lang="en">
        <body className={'app-layout '} >
        <Navbar/>
        {children}</body>
        <Footer/>
        </html>)
}
