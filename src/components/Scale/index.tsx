import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './styles.module.css';

export function Scale() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className={styles.container}
      onClick={() => setIsClicked(!isClicked)}
      animate={{
        scale: isClicked ? 1.2 : 1
      }}
    />
  );
}