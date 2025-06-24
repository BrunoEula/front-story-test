import type { CampaignCardProps } from "./campaignTypes/CampaignCardTypes";

export default function CampaignCard({ label, value, sub, highlight }: CampaignCardProps) {
    let valueColor = "text-black";
  
    if (highlight === "green") valueColor = "text-green-600";
    else if (highlight === "red") valueColor = "text-red-600";
    else if (highlight === "blue") valueColor = "text-blue-600";
  
    return (
      <div className="border rounded-xl p-4 bg-white shadow-sm">
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className={`text-xl font-bold ${valueColor}`}>{value}</div>
        {sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
      </div>
    );
  }