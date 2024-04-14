"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router=useRouter()
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);
  const onHide = () => {
   router.back()
  };
  return createPortal(
    <dialog ref={modalRef} onClose={onHide} className="shadow-lg flex flex-col border-gray-600 p-4 rounded-lg ">
      <span onClick={onHide} className="flex justify-end cursor-pointer">
         <Image src="/xmark.svg" alt="close" width={20} height={20}/>
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
