import Image from "next/image";
import Section from "../section";
import { motion } from "framer-motion";
import { FormEvent, useRef } from "react";
import { useSendMessageMutation } from "../../../redux/slices/apiSlice";

export default function ContactSection() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const submitForm = function (event: FormEvent) {
    event.preventDefault();

    const name = nameRef.current?.value;
    const email = nameRef.current?.value;
    const message = nameRef.current?.value;

    if (!name || !email || !message) {
      return;
    }

    const body = { name, email, message };
    sendMessage(body).then(() => alert("Message sent!"));
  };

  return (
    <Section id="contact" additionalClasses="relative">
      <div className="flex h-full items-center justify-center xl:justify-between">
        <motion.form
          onSubmit={submitForm}
          initial={{ x: -175, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-y-5"
        >
          <div className="block md:flex gap-5">
            <div className="flex flex-col gap-y-2">
              <label className="text-xl font-semibold">
                👤 What is your name?
              </label>
              <input
                className="bg-transparent border-b outline-none text-xl text-gray-300 placeholder:text-slate-400/20"
                type="text"
                placeholder="John Doe"
                required
                disabled={isLoading}
                ref={nameRef}
              />
            </div>

            <div className="flex flex-col gap-y-2 mt-5 md:mt-0">
              <label className="text-xl font-semibold">
                📧 Where can I reach you?
              </label>
              <input
                className="bg-transparent border-b outline-none text-xl text-gray-300 placeholder:text-slate-400/20"
                type="email"
                placeholder="john.doe@provider.com"
                required
                disabled={isLoading}
                ref={emailRef}
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-xl font-semibold">
              📝 What can I do for you?
            </label>
            <textarea
              rows={5}
              className="bg-transparent border-b outline-none resize-none text-xl text-gray-300 placeholder:text-slate-400/20"
              placeholder="Start typing your beautiful message..."
              required
              disabled={isLoading}
              ref={messageRef}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary disabled:bg-slate-600 disabled:text-slate-500 text-primary-900 text-lg px-5 py-3 rounded-md"
              disabled={isLoading}
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
