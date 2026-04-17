import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function MainForm({ children }: Props) {
  return (
    <form
      style={{
        width: '100%',
        maxWidth: '25rem',
        padding: '2.5rem',
        borderRadius: '0.75rem',
        backgroundColor: 'var(--bg-card)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {children}
    </form>
  );
}