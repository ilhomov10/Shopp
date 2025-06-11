import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={305}
      height={461}
      viewBox="0 0 305 460"
      backgroundColor="#a4a4a4"
      foregroundColor="#ffffff"
    >
      <rect x="0" y="0" rx="5" ry="5" width="305" height="305" />
      <rect x="10" y="325" rx="2" ry="2" width="260" height="20" />
      <rect x="10" y="367" rx="2" ry="2" width="200" height="16" />
      <rect x="10" y="420" rx="2" ry="2" width="38" height="30" />
    </ContentLoader>
  );
};

export default Skeleton;