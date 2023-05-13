import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
const projects = [
  {
    name: "School Payment System",
    image: '/school-payment.png',
    github:'https://github.com/KenJaya270/pembayaran-spp',
    description:'A Web application that I create for my vocational test.'
  },
  {
    name:'BNews',
    image:'/berita.png',
    github:'https://github.com/KenJaya270/web-berita',
    description:'A Web application that contains article or hot news'
  },
  {
    name:'Pengaduan Masyarakat',
    image:'/pengaduan-masyarakat.png',
    github:'https://github.com/KenJaya270/pengaduan-masyarakat',
    description:'A Web application that used to accomodate public complaints.'
  }
]

const ProjectsSection = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="mb-3 font-semibold text-4xl tracking-[0.3rem]">
          Projects
        </h1>
        <p className="text-3xl">Projects that I create at school and also in my spare time</p>
      </div>

      <div className="flex flex-col justify-center space-y-12">
        {projects.map((project, idx) => {
          return(
            <div key={idx}>
              <div className="flex flex-col">
                <div className="flex space-x-4">
                  <div className="group shadow-lg">
                    <Image src={project.image} alt="" width={508} height={171} className="object-cover object-center rounded group-hover:scale-105 cursor-pointer transition"/>
                  </div>
                  <div className=''>
                    <h1 className="font-semibold text-[1.4rem] mb-3">{project.name}</h1>
                    <p className='text-[1.1rem] text-black'>{project.description}</p>
                    <Link className="group" href={project.github}>
                      <button className="group-hover:bg-transparent group-hover:text-[#19A7CE] group-hover:border-[#19A7CE] group-hover:border-2 transition mt-3 rounded-full px-3 py-2 bg-[#19A7CE] font-semibold text-white" type="button">View on Github</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsSection
