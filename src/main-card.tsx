import React from 'react';
import "./sass/main-card.scss";

export interface MainCardProps {
  children: React.ReactNode
  className?: string
}

const MainCard = ({ className, children }: MainCardProps) => {
  return (
    <div className={`card main-card hoverable white-text w-auto blurred-panel ${className ?? ""}`}>
      {children}
    </div>
  );
}

export default MainCard;
