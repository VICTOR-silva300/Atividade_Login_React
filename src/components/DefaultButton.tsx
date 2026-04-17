import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function DefaultButton({ ...props }: Props) {
  return (
    <button
      {...props}
      style={{
        width: '100%',
        height: '3rem',
        backgroundColor: 'var(--primary-color)',
        border: 'none',
        borderRadius: '0.5rem',
        fontWeight: 'bold',
        color: '#fff',
        cursor: 'pointer',
        transition: '0.3s',
      }}
    >
      {props.children}
    </button>
  );
}