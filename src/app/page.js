import Hero from "@/components/hero";
import HeroCode from "@/components/heroCode";
import Stack from "@/components/stack";
import Showcase from "@/components/showcase";

export default function Home() {
    return (
        <main className="flex flex-col gap-10 sm:gap-16 p-6 sm:p-8 xl:p-16 overflow-x-hidden 2xl:max-w-[96rem] 2xl:mx-auto">
            <Hero/>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
                <HeroCode/>
                <Stack/>
            </div>
            <Showcase/>
        </main>);
}
