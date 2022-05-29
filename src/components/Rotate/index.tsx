import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './styles.module.css';

export function Rotate() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className={styles.container}
      onClick={() => setIsClicked(!isClicked)}
      animate={{
        rotate: isClicked ? 90 : 0
      }}
    />
  );
}