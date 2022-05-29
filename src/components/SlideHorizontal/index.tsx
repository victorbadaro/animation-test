import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './styles.module.css';

export function SlideHorizontal() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className={styles.container}
      onClick={() => setIsClicked(!isClicked)}
      animate={{
        x: isClicked ? 200 : 0
      }}
    />
  );
}