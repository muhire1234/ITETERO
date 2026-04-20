import { useState } from "react";
import { motion } from "framer-motion";
import { menuCategories } from "../../data/menu";
import bgImg from "../../assets/images/bg.png";

export default function MenuSection() {
    const [active, setActive] = useState(menuCategories[0]?.id ?? "coffee");

    const current =
        menuCategories.find((category) => category.id === active) ??
        menuCategories[0];

    return (
        <section
            id="menu"
            className="bg-center bg-cover bg-no-repeat py-24 text-[#FDF6EC]"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-8 flex flex-wrap justify-center gap-3">
                    {menuCategories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() => setActive(category.id)}
                            className={`rounded-full px-5 py-2 text-sm transition ${active === category.id
                                ? "bg-[#7B3F00] text-white shadow"
                                : "border border-[#D2956A]/30 text-[#D2956A] hover:bg-[#7B3F00]/20"
                                }`}
                        >
                            {category.icon} {category.label}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={current?.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="mb-8 overflow-hidden rounded-2xl border border-[#D2956A]/20 bg-[#3a1a08]/60"
                >
                    <div className="relative h-48 sm:h-56">
                        <img
                            src={current?.bannerImg ?? current?.items?.[0]?.img}
                            alt={`${current?.label} banner`}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/30" />
                        <div className="absolute inset-0 flex items-end justify-center pb-5">
                            <h3 className="text-xl font-semibold tracking-[0.16em] text-[#FDF6EC] sm:text-2xl">
                                ---{current?.label}---
                            </h3>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {current?.items.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="rounded-2xl border border-[#D2956A]/20 bg-[#3a1a08]/60 p-4 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D2956A]/30 bg-[#2c1200]/70 text-lg">
                                    {current?.icon}
                                </div>
                                <h3 className="text-base font-semibold">{item.name}</h3>
                            </div>

                            <p className="mb-4 text-sm text-[#D2B48C]">
                                <span className="font-semibold text-[#D2956A]">
                                    {item.ingLabel ?? "Made of"}:
                                </span>{" "}
                                {item.ing}
                            </p>

                            {typeof item.price === "number" && (
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-[#D2956A]">
                                        Cost: ${item.price.toFixed(2)}
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
