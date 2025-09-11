import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col gap-6 sm:gap-8">
            <Image src="/developer-photo.jpeg" width={100} height={100} className="rounded-full"
                   alt="Разработчик"></Image>
            <h1 className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-white/10 after:-left-[100vw] text-4xl tracking-tighter text-balance font-medium sm:text-6xl xl:text-8xl">
                <span className={'opacity-60'}>Привет! </span>
                Меня зовут <span
                className="bg-slate-900 px-2 font-mono text-gray-300">Даниил</span> и&nbsp;я&nbsp;разработчик.
            </h1>
            <div
                className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-white/10 after:-left-[100vw]">
                <p className="max-w-(--breakpoint-md) text-base sm:text-lg/7 font-medium text-gray-400"> Мои
                    ключевые компетенции: <span
                        className="font-mono sm:text-[1.0625rem] text-sky-400">веб‑дизайн</span>, <span
                        className="font-mono sm:text-[1.0625rem] text-sky-400">fullstack‑разработка</span> и&nbsp;поддержка <span
                        className="font-mono sm:text-[1.0625rem] text-white">сайтов</span>, <span
                        className="font-mono sm:text-[1.0625rem] text-white">интернет‑магазинов</span> e‑commerce, <span
                        className="font-mono sm:text-[1.0625rem] text-white">Telegram‑ботов</span> и&nbsp;мини‑аппов.<br/>Соблюдаю
                    принципы KISS и DRY.</p>
                <div
                    className="flex flex-col flex-wrap gap-2 sm:flex-row lg:items-end font-mono text-sm/6 text-white/50 mt-4">
                    <span className="text-wrap">📆 30.05.1994 г.р.</span>
                    <span className="text-wrap">🌎 Удаленка</span>
                    <span className="text-wrap">🔖 Самозанятость • ООО на УСН • Криптовалюта</span>
                    <span className="text-wrap">🇷🇺&nbsp;Русский (родной) 🇬🇧&nbsp;Английский (B1) 🇩🇪&nbsp;Немецкий (A1) 🇪🇸&nbsp;Испанский (A1)</span>
                </div>
            </div>
        </div>
    );
}
