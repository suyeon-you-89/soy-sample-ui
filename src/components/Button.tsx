import React from 'react';
import styles from '@/styles/components/Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' |'custom';
}

export const SampleButton: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  const base = "px-4 py-2 rounded font-semibold";
  const variantClass = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    custom: styles.custom
};

  return (
    <button
      {...props}
      className={`${base} ${variantClass[variant]} ${styles.button} ${className || ''}`}
    />
  );
};
