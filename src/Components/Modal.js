import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef();

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center transition-all duration-300">
      <div
        ref={modalRef}
        className="bg-gray-800 w-[90%] max-w-2xl p-6 rounded-lg relative text-black animate-fadeInUp shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>

        {/* Content */}
        <h2 className="text-2xl font-bold text-[#00df9a] text-center">{project.title}</h2>
        <img src={project.image} alt={project.title} className="mt-4 w-full rounded-md" />
        <p className="mt-4 text-white">{project.description}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 bg-[#00df9a] text-black font-semibold rounded hover:bg-[#00df9a]/80 "
          >
            Visit Site
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
