import React from 'react';
import ContentLoader from 'react-content-loader';

export const Sceleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="135" cy="125" r="125" />
    <rect x="136" y="302" rx="0" ry="0" width="0" height="7" />
    <rect x="-4" y="260" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="300" rx="10" ry="10" width="280" height="88" />
    <rect x="128" y="401" rx="25" ry="25" width="152" height="45" />
    <rect x="0" y="408" rx="10" ry="10" width="90" height="27" />
  </ContentLoader>
);
