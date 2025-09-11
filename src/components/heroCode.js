import Link from "next/link";

export default function HeroCode() {
    return (
        <>
            <div className="lg:col-span-2 lg:-mx-px max-xl:w-full">
                <div className="rounded-xl bg-gray-950">
                    <div className="rounded-xl p-1 text-sm inset-ring inset-ring-white/10">
                        <div className="flex gap-2 p-2">
                            <span className="size-3 rounded-full bg-white/20"></span>
                            <span className="size-3 rounded-full bg-white/20"></span>
                            <span className="size-3 rounded-full bg-white/20"></span>
                        </div>
                        <div className="with-line-numbers text-[13px]/6 *:*:p-3!">
                            <div
                                className="*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 dark:*:bg-white/5! **:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh] *:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5">
                                <pre tabIndex="0">
                                    <code>
                                        <code>
                                            <span className="line">
                                            <span className="text-pink-400">export developer</span>
                                            <span className="text-slate-400"> {'{'}</span>
                                            </span>
                                            <span className="line">
                                                <span className="text-slate-400">  </span>
                                                <span className="text-sky-400">name</span>
                                                <span className="text-slate-400">: </span>
                                                <span className="text-sky-400">'Даниил'</span>
                                                <span className="text-slate-400">, </span>
                                            </span>
                                            <span className="line">
                                                <span className="text-slate-400">  </span>
                                                <span className="text-sky-400">surname</span>
                                                <span className="text-slate-400">: </span>
                                                <span className="text-sky-400">'Черняков'</span>
                                                <span className="text-slate-400">, </span>
                                            </span>
                                            <span className="line">
                                                <span>  </span>
                                                <span className="text-sky-400">contacts</span>
                                                <span className="text-slate-400">: </span>
                                            </span>
                                            <span className="line">
                                                <span>    </span>
                                                <span className="text-sky-400">whatsapp</span>
                                                <span className="text-slate-400">: </span>
                                                <Link href={'https://wa.me/79136062001'} target={'_blank'}
                                                      className="text-sky-400">'+7 (913) 606-20-01'</Link>
                                                <span className="text-slate-400">, </span>
                                            </span>
                                            <span className="line">
                                                <span>    </span>
                                                <span className="text-sky-400">telegram</span>
                                                <span className="text-slate-400">: </span>
                                                <Link href={'https://t.me/me_danila'} target={'_blank'}
                                                      className="text-sky-400">'me_danila'</Link>
                                            </span>
                                            <span className="line">
                                                <span>  </span>
                                                <span className="text-slate-400">{'}'},</span>
                                            </span>
                                            <span className="line">
                                                <span className="text-slate-400">  </span>
                                                <span className="text-sky-400">headhunter</span>
                                                <span className="text-slate-400">: </span>
                                                <Link
                                                    href={'https://omsk.hh.ru/resume/bf277983ff097dbefd0039ed1f523961557761'}
                                                    target={'_blank'}
                                                    className="text-sky-400">'https://omsk.hh.ru/resume/bf277983ff097dbefd0039ed1f523961557761'</Link>
                                            </span>
                                            <span className="line">
                                                <span className="text-slate-400">{'}'}</span>
                                            </span>
                                        </code>
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
