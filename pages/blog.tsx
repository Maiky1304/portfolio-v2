import type { NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import { BlogLayout } from "../components/layouts/blog";
import { motion } from "framer-motion";

const Blog: NextPage = () => {
  return (
    <div className="flex mt-20 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/coming-soon-banner.svg"
          alt="Coming soon"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
};

//@ts-ignore
Blog.getLayout = function getLayout(page: ReactNode) {
  return <BlogLayout>{page}</BlogLayout>;
};

export default Blog;
