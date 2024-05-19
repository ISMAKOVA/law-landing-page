import { motion } from "framer-motion";

export default () => {
  return (
    <section className="h-screen px-4 md:px-16 flex justify-center md:justify-between items-center font-serif">
      <p className=" font-bold text-5xl md:text-8xl ">
        Полный спектр <i className="text-secondary">юридических</i> услуг
        <b className="text-accent">.</b>
      </p>
      <div className="font-extrabold italic text-8xl md:text-9xl text-secondary2 self-start pt-20 relative">
        <div className="absolute -right-20 md:-right-14">
          <p className="pl-20">logo</p>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
            }}
            className="top-9 block h-0.5 w-96 mt-6 bg-secondary2"
          />
        </div>
      </div>
    </section>
  );
};
