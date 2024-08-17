import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container-page";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from 'next/link';

interface DownloadButtonProps {
    href: string;
    fileName: string;
  }
  
  const DownloadButton: React.FC<DownloadButtonProps> = ({ href, fileName }) => {
    return (
      <Link href={href} download={fileName}>
        <p className="download-button">Descargar CV</p>
      </Link>
    );
  };
  

const ServicesPage = () => {
    return (
        <>
           <ContainerPage>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="absolute grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend y Backend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <div
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            <DownloadButton href="/NicoProgramacionn.pdf" fileName="portafolio.pdf" />
                        </div>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
            </ContainerPage>
        </>
    );
    
}

export default ServicesPage;