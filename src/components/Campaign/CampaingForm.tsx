import { useState } from "react";
import type { Campaign } from "./campaignTypes/CampaignCardTypes";

interface CampaignFormProps {
  onSubmit: (campaign: Campaign) => void;
}

export default function CampaignForm({ onSubmit }: CampaignFormProps) {
  const [form, setForm] = useState({
    name: "",
    startDate: "",
    endDate: "",
    clicks: "",
    cost: "",
    revenue: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCampaign: Campaign = {
      id: crypto.randomUUID(), 
      name: form.name,
      startDate: form.startDate,
      endDate: form.endDate,
      clicks: parseInt(form.clicks),
      cost: parseFloat(form.cost),
      revenue: parseFloat(form.revenue),
    };

    onSubmit(newCampaign);

    setForm({
      name: "",
      startDate: "",
      endDate: "",
      clicks: "",
      cost: "",
      revenue: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded-md shadow-lg"
    >
      <h2 className="text-lg font-bold">Add Campaign</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Campaign Name"
          className="border px-3 py-2 rounded w-full"
          required
        />
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
          required
        />
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
          required
        />
        <input
          type="number"
          name="clicks"
          value={form.clicks}
          onChange={handleChange}
          placeholder="Clicks"
          className="border px-3 py-2 rounded w-full"
          required
        />
        <input
          type="number"
          name="cost"
          value={form.cost}
          onChange={handleChange}
          placeholder="Cost"
          className="border px-3 py-2 rounded w-full"
          step="0.01"
          required
        />
        <input
          type="number"
          name="revenue"
          value={form.revenue}
          onChange={handleChange}
          placeholder="Revenue"
          className="border px-3 py-2 rounded w-full"
          step="0.01"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Campaign
      </button>
    </form>
  );
}
