export interface Campaign {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  clicks: number;
  cost: number;
  revenue: number;
}

export interface CampaignCardProps {
  label: string;
  value: string | number;
  sub?: string;
  highlight?: "green" | "red" | "blue";
}

