import React, { createContext } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LinkExplore: React.FC = () => {
  return (
    <div>
      <Link href="/shop" passHref>
        <motion.a
          className="btn-main rounded-2xl text-base px-8 py-2.5 bg-blue-500 text-white"
          whileHover={{ scale: 1.05, backgroundColor: '#3182ce', transition: { duration: 0.3 } }}
        >
          Get Merch
        </motion.a>
      </Link>
    </div>
  );
};

export default LinkExplore;
