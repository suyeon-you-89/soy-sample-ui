import { default as React } from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'custom';
}
export declare const SampleButton: React.FC<ButtonProps>;
