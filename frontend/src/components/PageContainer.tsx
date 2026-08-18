import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default PageContainer;
