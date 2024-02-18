import React from 'react';
import Navbar from '@/components/Navbar';
import request from '@/lib/config';

const MainLayout = ({ children }) => {
  const { props } = children;
  const [social, setSocial] = React.useState(props.social);

  React.useEffect(() => {
    const getSocial = async () => {
      const res = await request('/custom/footer/get');
      setSocial(res?.data?.data?.filter((s) => s.key.includes('social')));
    };
    getSocial();
  }, []);

  return (
    <div className="bg-secondary w-full min-h-screen">
      <div className="z-50">
        <Navbar social={social} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
