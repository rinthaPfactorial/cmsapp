"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
    Input,
    SectionHeading,
    SlideIn,
    Textarea,
    TextReveal,
    Transition,
} from '@/blocks/ui';
import { cn } from "@/utils/cn";
import Link from "next/link";


export default function FooterClient({ footerData }: { footerData: any }) {
    const social_handle = footerData?.social_link;

    return (
        <motion.section className="relative bg-paceBlue">
            <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]" />
            <div className="p-4 md:p-8 md:px-16">
                <SectionHeading className=" text-gamaGreen">
                    <SlideIn className="">Interested in talking,</SlideIn>
                    <br /> <SlideIn>let’s do it.</SlideIn>
                </SectionHeading>
                <div className="grid md:grid-cols-2 gap-10 md:pt-16">
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <Transition className="w-full">
                                <Input
                                    id="full-name"
                                    placeholder="Full name"
                                    className="border-0 border-b rounded-none"
                                />
                            </Transition>
                            <Transition className="w-full">
                                <Input
                                    id="email"
                                    placeholder="Email"
                                    type="email"
                                    className="border-0 border-b rounded-none"
                                />
                            </Transition>
                        </div>
                        <div className="space-y-2">
                            <Transition>
                                <Input
                                    id="subject"
                                    placeholder="Enter the subject"
                                    className="border-0 border-b rounded-none"
                                />
                            </Transition>
                        </div>
                        <div className="space-y-2">
                            <Transition>
                                <Textarea
                                    className="min-h-[100px] rounded-none border-0 border-b resize-none"
                                    id="message"
                                    placeholder="Enter your message"
                                />
                            </Transition>
                        </div>
                        <div>
                            <Transition>
                                <motion.button
                                    whileHover="whileHover"
                                    initial="initial"
                                    className="border border-white/30 px-8 py-2 rounded-3xl relative overflow-hidden hover:bg-foreground/20 transition-colors"
                                >
                                    <TextReveal className="uppercase text-foreground">discuss project</TextReveal>
                                </motion.button>
                            </Transition>
                        </div>
                    </div>
                    <div className="md:justify-self-end flex flex-col">
                        <div className="pb-4">
                            <Transition>
                                <span className="text-white/90">Get in touch</span>
                            </Transition>
                            <div className="text-2xl md:text-4xl font-bold py-2">
                                <Transition>
                                    <TextReveal className="text-foreground">{footerData.email}</TextReveal>
                                </Transition>
                            </div>
                            <Transition>
                                <div className="pb-1 text-white/80">+91 {footerData.phone}</div>
                            </Transition>
                            <Transition>
                                <div className="text-white/80">{footerData.address}</div>
                            </Transition>
                        </div>

                        <div className="flex md:gap-8 gap-4 mt-auto md:pb-16">
                            {social_handle.map((social, index) => (
                                <Transition
                                    key={social._id}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <Link href={social.link}>
                                        <TextReveal className="text-foreground">{social.label}</TextReveal>
                                    </Link>
                                </Transition>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <footer className="flex items-center justify-between md:px-8 px-2 py-4 text-sm text-foreground">
                <Transition>
                    <div>&copy; {new Date().getFullYear()} ThePortfolio</div>
                </Transition>
                {/* <Transition>
          <p>
            developed by @
            <Link
              href={"https://twitter.com/tehseen_type"}
              className="hover:underline"
            >
              tehseen
            </Link>
          </p>
        </Transition> */}
            </footer>
        </motion.section>
    );
};


export const BackgroundScale = ({
    children,
    className,
}: BackgroundScaleProps) => {
    return (
        <motion.div
            whileHover="whileHover"
            whileFocus="whileHover"
            whileTap="whileHover"
            initial="initial"
            className={cn("relative p-1 group", className)}
        >
            <motion.span
                variants={{
                    initial: { scaleY: 0 },
                    whileHover: { scaleY: 1 },
                }}
                className="absolute top-0 left-0 h-full w-full bg-primary -z-10 group-hover:text-black"
            />
            {children}
        </motion.div>
    );
};
