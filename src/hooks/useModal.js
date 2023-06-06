import { useState } from "react";

export const useModal = (initalValue = false) => {
  const [isOpen, setIsOpen] = useState(initalValue);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return [isOpen, openModal, closeModal];
};
