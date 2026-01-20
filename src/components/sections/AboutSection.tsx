"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              CRAFTING CODE
              <br />
              IS AN ART
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg sm:text-xl leading-relaxed">
                IT'S ALL ABOUT BLENDING CLEAN CODE & EXCEPTIONAL USER
                EXPERIENCES SEAMLESSLY LIKE A PERFECT SYMPHONY OF LOGIC AND
                CREATIVITY
              </p>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  With over 5 years of experience in full-stack development, I
                  specialize in building modern web applications that not only
                  function flawlessly but also provide intuitive user
                  experiences.
                </p>

                <p className="leading-relaxed">
                  I believe in writing maintainable code, following industry
                  best practices, and staying current with emerging
                  technologies. Whether it's architecting scalable backend
                  systems or crafting pixel-perfect frontend interfaces, I
                  approach every project with attention to detail and a passion
                  for excellence.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-sm font-bold tracking-wide mb-4">
                TECHNOLOGIES I WORK WITH
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div>Frontend</div>
                  <div className="text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS
                  </div>
                </div>
                <div className="space-y-2">
                  <div>Backend</div>
                  <div className="text-muted-foreground">
                    Node.js, Express.js, PostgreSQL, MongoDB
                  </div>
                </div>
                <div className="space-y-2">
                  <div>Tools</div>
                  <div className="text-muted-foreground">
                    Git, Docker, AWS, Vercel
                  </div>
                </div>
                <div className="space-y-2">
                  <div>Mobile</div>
                  <div className="text-muted-foreground">
                    React Native, Flutter
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
