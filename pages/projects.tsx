import React from 'react'
import ProjectsSection from '@/components/ProjectsSection'
import Navbar from '@/components/Navbar'
import "../styles/globals.css"
import Footer from '@/components/Footer'
export default function projects() {
    return (
        <html>
            <head>
            <title>Ken Jayakusuma</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"/>
            </head>
            <body>
                <Navbar/>
                <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
                    <ProjectsSection/>
                </main>
                <Footer/>
            </body>
        </html>

    )
}
