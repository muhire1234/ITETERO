import { galleryItems } from "../../data/gallery";

export default function GallerySection() {
    return (
        <section
            id="gallery"
            className="relative overflow-hidden bg-[#FDF6EC] px-6 py-28 text-[#3D1A00]"
        >
            <div className="pointer-events-none absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-[#FF6A00]/12 blur-3xl" />
            <div className="pointer-events-none absolute right-10 top-40 h-40 w-40 rounded-full bg-[#FF6A00]/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                <div className="mb-14 text-center">
                    <div className="mb-4 flex items-center justify-center gap-4 text-[#FF6A00]">
                        <span className="h-px w-14 bg-[#FF6A00]/60 sm:w-20" />
                        <h2 className="text-2xl font-black uppercase tracking-[0.28em] sm:text-3xl">
                            ---OUR GALLERY---
                        </h2>
                        <span className="h-px w-14 bg-[#FF6A00]/60 sm:w-20" />
                    </div>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#7B4D31] sm:text-base">
                        Warm coffee moments, signature drinks, and the welcoming energy
                        that makes the café feel like a shared neighborhood table.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {galleryItems.map((item) => (
                        <article
                            key={item.id}
                            className="group relative overflow-hidden rounded-[1.75rem] bg-[#FFF9F1] shadow-[0_18px_40px_rgba(97,57,24,0.14)] ring-1 ring-[#E9C9A9]/55 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(255,106,0,0.18)]"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.alt ?? item.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A12]/78 via-[#2B1A12]/18 to-transparent" />

                                {item.featured && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-[#FF6A00]/16 opacity-0 transition duration-300 group-hover:opacity-100">
                                        <span className="rounded-full bg-[#FF6A00] px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#FF6A00]/30">
                                            View More
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2 p-5">
                                <h3 className="text-lg font-bold text-[#3D1A00]">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-[#7B4D31]">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
