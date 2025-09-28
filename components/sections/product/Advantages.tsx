"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BookOpen, Smartphone, CheckCircle2 } from "lucide-react";
import Carousel from "@/components/ui/Carousel";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="inline-flex items-start gap-2 text-sm text-slate-700">
      <CheckCircle2 size={16} className="mt-0.5 text-bravy-accent" />
      <span className="[&_strong]:block sm:[&_strong]:inline sm:[&_strong]:mr-1 [&_strong]:mb-0.5 sm:[&_strong]:mb-0">
        {children}
      </span>
    </li>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ProductAdvantages() {
  return (
    <section id="advantages" className="relative">
      <Container className="py-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What are the Best Features of BRAVY?
          </h2>
          <p className="mt-3 text-slate-700">
            A multimodal system—<strong>Physical Module</strong> +{" "}
            <strong>Android App</strong>—to amplify every feature
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Card 1 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25, // butuh ~25% elemen masuk viewport
              margin: "0px 0px -15% 0px", // cegah trigger saat full above-the-fold
            }}
            className="card p-6 lg:p-8"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-md font-semibold text-bravy-primary">
              <BookOpen size={16} /> Physical Module — Advantages
            </div>
            <div className="grid items-center gap-6 sm:grid-cols-2">
              <div>
                <ul className="grid gap-2 text-sm text-slate-700">
                  <Bullet>
                    <strong>Speaking Material:</strong> Learn structured
                    speaking lessons.
                  </Bullet>
                  <Bullet>
                    <strong>Grammar Bite:</strong> Quick grammar tips for daily
                    use.
                  </Bullet>
                  <Bullet>
                    <strong>Self-Reflection Sheet:</strong> Track and reflect on
                    your learning progress.
                  </Bullet>
                  <Bullet>
                    <strong>Progress Tracker:</strong> Monitor your achievements
                    step by step.
                  </Bullet>
                  <Bullet>
                    <strong>Interactive Learning Kit:</strong> Engage with fun
                    and practical exercises.
                  </Bullet>
                </ul>
              </div>
              <Carousel
                images={[
                  "/module-photo-1.png",
                  "/module-photo-2.png",
                  "/module-photo-3.png",
                ]}
                altPrefix="BRAVY Module"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
              margin: "0px 0px -15% 0px",
            }}
            className="card p-6 lg:p-8"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-md font-semibold text-bravy-primary">
              <Smartphone size={16} /> Android App — Advantages
            </div>
            <div className="grid items-center gap-6 sm:grid-cols-2">
              <div>
                <ul className="grid gap-2 text-sm text-slate-700">
                  <Bullet>
                    <strong>FEA Feature:</strong> Face your confidence with
                    guided practice.
                  </Bullet>
                  <Bullet>
                    <strong>Community:</strong> Connect and practice with other
                    learners.
                  </Bullet>
                  <Bullet>
                    <strong>Animation Materials:</strong> Access digital lessons
                    anytime, anywhere.
                  </Bullet>
                  <Bullet>
                    <strong>Interactive Exercises:</strong> Practice speaking
                    through interactive tasks.
                  </Bullet>
                  <Bullet>
                    <strong>Gamification:</strong> Learn with fun challenges,
                    points, and rewards.
                  </Bullet>
                </ul>
              </div>
              <Carousel
                images={[
                  "/app-photo-1.png",
                  "/app-photo-2.png",
                  "/app-photo-3.png",
                ]}
                altPrefix="BRAVY App"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
