"use client";
import { motion } from "framer-motion";
import { ai_agent } from "@/lib/assets";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${ai_agent.src})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-4 md:p-8">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl md:text-7xl font-bold text-white"
          >
            Venture Capital, <br /> Powered by Autonomous <br />
            <Highlight className="text-black dark:text-white">
              AI Agents
            </Highlight>
          </motion.h1>
        </HeroHighlight>
        <p className="mt-4 text-lg md:text-2xl font-medium text-gray-300">Committed capital across multiple dimensions</p>
      </div>
    </section>
  )
}