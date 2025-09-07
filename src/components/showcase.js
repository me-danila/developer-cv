import Link from "next/link";
import showcaseData from "@/showcase.json";

export default function Showcase() {
    return (
        <div className="flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col gap-4">
                <h2 className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-white/10 before:-left-[100vw] text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-5xl lg:text-6xl">
                    Реализованные проекты
                </h2>

                <div
                    className="flex flex-wrap items-center gap-2 text-xs relative after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-white/10 after:-left-[100vw]">
                    <span>Перейти к: </span>
                    {[...new Set(showcaseData.map((project) => project.category))].map((category, index) => (
                        <Link href={`#${category}`} key={index}
                              className="border border-slate-600 rounded-2xl px-2 py-1 transition hover:bg-white/5">{category}</Link>))}
                </div>
            </div>

            {Object.entries(showcaseData.reduce((groups, project) => {
                const category = project.category;
                if (!groups[category]) {
                    groups[category] = [];
                }
                groups[category].push(project);
                return groups;
            }, {})).map(([category, projects]) => (
                <div key={category} className="flex flex-col gap-6">
                    <h3 className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-white/10 after:-left-[100vw] px-1 text-slate-200 text-3xl sm:text-4xl text-balance font-medium bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10"
                        id={category}>
                        {category}
                    </h3>
                    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {projects.map((project, index) => {
                            const techStack = project.stack.split(',').map(tech => tech.trim());

                            return (<Link href={project.link} target="_blank" key={index}
                                          className="border border-slate-700 p-3 rounded-xl flex flex-col justify-between gap-4 transition hover:bg-black/40">
                                <div className="flex flex-col gap-2">
                                    <div aria-hidden="true"
                                         className="font-mono text-xs/4 text-white/50 flex justify-between">{project.country} {project.client}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor"
                                             className="shrink-0 size-5 opacity-50 ml-auto">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                                        </svg>
                                    </div>

                                    <div
                                        className="relative text-slate-200 flex gap-2">
                                        <div
                                            className="w-[6px] h-[6px] bg-green-500 rounded-full showcase-active mt-2 shrink-0"></div>
                                        <div className="text-base/5 flex flex-col gap-1">
                                            {project.name}
                                            <span
                                                className="block text-sm text-gray-400">{project.description}</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex gap-1 text-xs flex-wrap">
                                    {techStack.map((tech, techIndex) => (<span key={techIndex}
                                                                               className="bg-slate-800 rounded-2xl px-2 py-1 text-slate-300">
                                    {tech}
                                </span>))}
                                </div>
                            </Link>);
                        })}
                    </div>
                </div>))}
        </div>);
}