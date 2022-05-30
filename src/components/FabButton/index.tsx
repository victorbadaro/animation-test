import { AnimatePresence, motion } from 'framer-motion';
import { MouseEvent, ReactNode, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styles from './styles.module.css';

interface FabButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
}

export function FabButton({ children, icon }: FabButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMouseOver(event: MouseEvent) {
    event.preventDefault();
    setIsOpen(true);
  }

  function handleMouseLeave(event: MouseEvent) {
    event.preventDefault();
    setIsOpen(false);
  }

  return (
    <div
      className={styles.container}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.smallButtonsContainer}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        type="button"
        className={styles.bigButton}
      >
        {icon ? (icon) : (
          <MdAdd size={24} color="#fff" />
        )}
      </button>
    </div>
  );
}