import Image from "next/image";
import Section from "../section";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <Section id="contact" additionalClasses="relative">
      <div className="flex h-full items-center justify-center xl:justify-between">
        <motion.form
          initial={{ x: -175, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-y-5"
        >
          <div className="block md:flex gap-5">
            <div className="flex flex-col gap-y-2">
              <label className="text-xl font-semibold">
                What is your name?
              </label>
              <input
                className="bg-transparent border-b outline-none text-xl text-gray-300"
                type="text"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-y-2 mt-5 md:mt-0">
              <label className="text-xl font-semibold">
                Where can I reach you?
              </label>
              <input
                className="bg-transparent border-b outline-none text-xl text-gray-300"
                type="email"
                placeholder="john.doe@provider.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-xl font-semibold">
              What can I do for you?
            </label>
            <textarea
              rows={5}
              className="bg-transparent border-b outline-none resize-none text-xl text-gray-300"
              placeholder="Enter your message"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-primary-900 text-lg px-5 py-3 rounded-md"
            >
              Send message
            </button>
          </div>
        </motion.form>

        <motion.div
          className="hidden xl:block"
          initial={{ x: 175, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/contact.svg"
            alt="Illustration of a enveloppe"
            height={500}
            width={500}
          />
        </motion.div>
      </div>
    </Section>
  );
}
