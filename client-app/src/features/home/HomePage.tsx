import Footer from "@/app/layout/Footer"
import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <section id="hero" className="container">
            <div className="lg:h-[100vh] z-0 mt-48 lg:mt-0 flex flex-col justify-end lg:flex-row lg:justify-between items-center">
                <div className="flex flex-col items-center lg:items-start lg:justify-center text-center md:text-left">
                    <h1 className="max-w-xl text-xl lg:text-2xl xl:text-4xl font-semibold text-neutral-800 dark:text-neutral-50">Unlock the world of music with</h1>
                    <img className="w-full hidden dark:block" src="./src/assets/logo-darkmode.svg" draggable="false" alt="" />
                    <img className="w-full block dark:hidden" src="./src/assets/logo-lightmode.svg" draggable="false" alt="" />
                    <h2 className="max-w-xl mt-6 text-base lg:text-lg xl:text-2xl font-light text-neutral-600 text-center lg:text-left dark:text-neutral-300">The all-digital music network, always a click away</h2>
                    <div className="flex flex-row justify-start items-center mx-2 mt-6 gap-4">
                        <Button type="submit" size="lg"><p className="text-sm md:text-base">Get Started</p></Button>
                        <Button type="submit" size="lg" variant="secondary"><p className="text-sm md:text-base">About</p></Button>
                    </div>
                </div>
                <img className="w-full md:w-[75%] lg:w-[50%] mt-12 lg:mt-0" src="./src/assets/home.svg" alt="hero" draggable="false" />
            </div>
            <Footer></Footer>
        </section>
    )

}
