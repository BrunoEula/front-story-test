import type { Campaign } from "../campaignTypes/CampaignTypes";
import CampaignCard from "./CampaingCard";

interface Props {
  campaigns: Campaign[];
}

export default function CampaignMetrics({ campaigns }: Props) {

  const totalCampaigns = campaigns.length;
  const totalClicks = campaigns.reduce((sum, c) => sum + c.clicks, 0);
  const totalCost = campaigns.reduce((sum, c) => sum + c.cost, 0);
  const totalRevenue = campaigns.reduce((sum, c) => sum + c.revenue, 0);
  const totalProfit = totalRevenue - totalCost;
  const avgROI = totalCost === 0 ? 0 : (totalProfit / totalCost) * 100;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      <CampaignCard label="Total Campaigns" value={totalCampaigns} sub="Active campaigns" />
      <CampaignCard label="Total Clicks" value={totalClicks.toLocaleString()} sub="Campaign engagement" />
      <CampaignCard label="Total Cost" value={`$${totalCost.toLocaleString()}`} sub="Campaign spending" />
      <CampaignCard label="Total Revenue" value={`$${totalRevenue.toLocaleString()}`} sub="Generated revenue" />
      <CampaignCard label="Total Profit" value={`$${totalProfit.toLocaleString()}`} sub="Net profit" highlight="green" />
      <CampaignCard label="Avg ROI" value={`${avgROI.toFixed(1)}%`} sub="Return on investment" />
    </div>
  );
}
