import { useEffect, useState } from "react";
import type { Campaign } from "../components/Campaign/campaignTypes/CampaignTypes";
import CampaignForm from "../components/Campaign/components/CampaingForm";
import CampaignTable from "../components/Campaign/components/CampaingTable";
import { initialData } from "../components/Campaign/data/InitialData";
import CampaignMetrics from "../components/Campaign/components/CampaignMetrics";

type SortField = "name" | "date" | "profit" | null;

export default function Dashboard() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [sortBy, setSortBy] = useState<SortField>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("campaigns");
      const parsed = saved ? JSON.parse(saved) : null;

      if (Array.isArray(parsed) && parsed.length > 0) {
        setCampaigns(parsed);
      } else {
        setCampaigns(initialData);
        localStorage.setItem("campaigns", JSON.stringify(initialData));
      }
    } catch {
      setCampaigns(initialData);
      localStorage.setItem("campaigns", JSON.stringify(initialData));
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("campaigns", JSON.stringify(campaigns));
    }
  }, [campaigns, loaded]);

  const addCampaign = (newCampaign: Campaign) => {
    setCampaigns((prev) => [...prev, newCampaign]);
  };

  const deleteCampaign = (id: string) => {
    setCampaigns((prev) => prev.filter((c) => c.id !== id));
  };

  const getSortedCampaigns = () => {
    if (!sortBy) return campaigns;

    const copy = [...campaigns];

    if (sortBy === "name") {
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "date") {
      return copy.sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return dateA - dateB;
      });
    }

    if (sortBy === "profit") {
      return copy.sort((a, b) => {
        const profitA = a.revenue - a.cost;
        const profitB = b.revenue - b.cost;
        return profitB - profitA;
      });
    }

    return campaigns;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-blue-800 bg-blue-100">
        CAMPAIGN DASHBOARD
      </h1>
      <CampaignMetrics campaigns={campaigns} />
      <div className="h-px w-full bg-gray-300" />
      <CampaignForm onSubmit={addCampaign} />
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSortBy("name")}
          className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 text-sm"
        >
          Order by name
        </button>
        <button
          onClick={() => setSortBy("date")}
          className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 text-sm"
        >
          Order by date
        </button>
        <button
          onClick={() => setSortBy("profit")}
          className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 text-sm"
        >
          Order by profit
        </button>
      </div>
      <CampaignTable
        campaigns={getSortedCampaigns()}
        onDelete={deleteCampaign}
      />
    </div>
  );
}
