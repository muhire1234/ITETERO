import { motion } from "framer-motion";
import {
  aboutBanner,
  aboutHero,
  aboutMission,
  aboutQuote,
  aboutStory,
  aboutValues,
} from "../../data/about";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#2C1200] text-[#FDF6EC]">
      <div className="relative flex h-[60vh] items-center justify-center overflow-hidden text-center">
        <motion.img
          src={aboutHero.image}
          alt="About hero"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 px-6"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs tracking-[0.3em] text-[#D2956A]"
          >
            {aboutHero.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold md:text-5xl"
          >
            {aboutHero.title}
          </motion.h1>
        </motion.div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 text-center text-xs tracking-[0.3em] text-[#D2956A]"
        >
          {aboutStory.eyebrow}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <h2 className="mb-3 text-2xl font-semibold">{aboutStory.title}</h2>
            <p className="text-sm leading-relaxed text-[#E8D5C0]/80">
              {aboutStory.description}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center rounded-2xl border border-[#7B3F00]/30 bg-[#7B3F00]/20 p-8"
          >
            <div className="text-5xl">{aboutStory.icon}</div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 text-center text-xs tracking-[0.3em] text-[#D2956A]"
        >
          {aboutMission.eyebrow}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid items-center gap-8 md:grid-cols-2"
        >
          <motion.img
            variants={fadeUp}
            src={aboutMission.image}
            alt="Our mission"
            className="rounded-2xl"
          />

          <motion.h3 variants={fadeUp} className="text-2xl font-semibold">
            {aboutMission.title}
          </motion.h3>
        </motion.div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 text-xs tracking-[0.3em] text-[#D2956A]"
        >
          --- OUR VALUES ---
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-10"
        >
          {aboutValues.map((value) => (
            <motion.div
              key={value.label}
              variants={fadeUp}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#7B3F00]/30 bg-[#7B3F00]/20 text-xl">
                {value.icon}
              </div>
              <span className="text-sm text-[#E8D5C0]">{value.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 text-sm text-[#D2956A]/80"
        >
          Delicious meals for every occasion
        </motion.p>
      </div>

      <div className="relative flex h-56 items-center justify-center overflow-hidden text-center">
        <motion.img
          src={aboutBanner.image}
          alt="Community banner"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 px-6 text-2xl font-semibold md:text-3xl"
        >
          {aboutBanner.title}
        </motion.h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="px-6 py-20 text-center"
      >
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#E8D5C0]/90">
          "{aboutQuote}"
        </p>
      </motion.div>
    </section>
  );
}
