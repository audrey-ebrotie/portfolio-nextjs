import { Section } from "@/app/_components/Section"

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start">
            <div className="flex-3 pr-8 pb-8">
                <h2 className="text-primary-foreground text-3xl text-decoration-line: underline font-thin">Front-end web developer</h2><br />
                <p>Passionate about creating smooth and high-performance user interfaces, I also bring a marketing perspective that makes a difference: I don&apos;t just develop, I build experiences that convert. <br />My rigorous technical approach combined with my understanding of business challenges allows me to deliver projects that meet growth objectives.</p>
            </div>
            <div className="flex-2 m-auto">
                <img src="https://audrey-ebrotie.github.io/portfolio-react/photo-profil-Audrey.jpg" alt="profile picture Audrey EBROTIE" width={250} height={250} className="max-w-xs aspect-square rounded-full object-cover object-[20%_25%] max-md:w-50 m-auto"/>
            </div>
        </Section>
    )
}