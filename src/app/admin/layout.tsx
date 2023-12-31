import React, { FC, ReactNode } from 'react';
import LayoutPage from '@/pages/admin/components/layout/LayoutPage';

interface LayoutType {
  children: ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <LayoutPage>{children}</LayoutPage>
    </>
  );
};
export default Layout;
