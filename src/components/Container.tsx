import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
}