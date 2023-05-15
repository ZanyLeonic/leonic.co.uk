import React from 'react';
import "./sass/main-card.scss";

export interface MainCardProps {
  children: React.ReactNode
}

const MainCard = ({ children }: MainCardProps) => {
  return (
    <div className="card main-card hoverable white-text w-auto">
      {children}
    </div>
  );
}

export default MainCard;
