import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  className?: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  className,
  icon,
}) => {
  return (
    <div className="text-sm text-center">
      <div className="font-semibold">{label}</div>
      <div
        className={className + " flex items-center justify-center space-x-1"}
      >
        {icon}
        <span>{value}</span>
      </div>
    </div>
  );
};

export default StatCard;
