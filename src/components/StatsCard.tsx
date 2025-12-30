import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  background-color: #f4f4f4;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

interface StatsCardProps {
  title: string;
  value: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{value}</p>
    </Card>
  );
};

export default StatsCard;
