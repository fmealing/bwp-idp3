import React from "react";

interface ConditionItemProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const ConditionItem: React.FC<ConditionItemProps> = ({
  label,
  value,
  icon,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {icon && <span>{icon}</span>}
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-success font-semibold">{value}</span>
    </div>
  );
};

export default ConditionItem;
