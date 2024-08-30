import React, { FC } from "react";

interface titleProps {
  title: string;
  className?: string;
}

const TitleComponent: FC<titleProps> = ({ title, className }) => {
  return <h2 className={className}>{title}</h2>;
};

export default TitleComponent;
