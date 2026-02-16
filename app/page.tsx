"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#ff5a5f] text-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-12">
        <div className="flex items-center overflow-hidden">
          <motion.div
          initial={{ scale: 0.5, opacity: 0}}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
                src="/logo.svg"
                alt="TalkBox logo"
                width={40}
                height={40}
                priority
                className="h-40 w-40 md:h-48 md:w-48"
            />
          </motion.div>

          <motion.h1
          initial = {{ x: -14, opacity: 0 }}
          animate = {{ x: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.45, ease:"easeOut" }}
          className="ml-5 text-8xl font-extrabold tracking-tight">
            TalkBox
          </motion.h1>
        </div>
        <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.35, ease:"easeOut" }}
            className="-mt-12 max-w-2xl text-center text-lg md:text-2xl font-medium text-white/95"
          >
            Chat, share and vibe - the better way to communicate
          </motion.p>

        <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1}}
        transition={{ delay: 0.9, duration: 0.35, ease: "easeOut" }}
        className="flex gap-3">
          <Button
          asChild
          className="h-14 px-10 text-lg bg-white text-[#ff5a5f] hover:bg-white/90 font-bold">
            <Link href="/signup">Sign Up!</Link>
          </Button>

          <Button
          asChild
          variant="outline"
          className="h-14 px-10 text-lg bg-[#ff5a5f] text-white hover:bg-white/90 font-bold hover:text-[#ff5a5f]">
            <Link href="login">Login</Link>
          </Button>
        </motion.div>
      </div>
    </main> 
  )
}