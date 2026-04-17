import type { InputHTMLAttributes } from 'react';
import type { ReactNode } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

export function DefaultInput({ icon, ...props }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '0.0625rem solid var(--text-muted)',
        borderRadius: '0.5rem',
        padding: '0 0.75rem',
        height: '3rem',
      }}
    >
      <span style={{ marginRight: '0.5rem' }}>{icon}</span>

      <input
        {...props}
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'var(--text-main)',
          width: '100%',
        }}
      />
    </div>
  );
}