import type { Campaign } from "../campaignTypes/CampaignCardTypes";

export const initialData: Campaign[] = [
    {
      id: "1",
      name: "Summer Sale",
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      clicks: 12000,
      cost: 4500,
      revenue: 9800
    },
    {
      id: "2",
      name: "Back to School",
      startDate: "2024-08-15",
      endDate: "2024-09-10",
      clicks: 8500,
      cost: 3200,
      revenue: 7100
    },
    {
      id: "3",
      name: "Black Friday",
      startDate: "2024-11-20",
      endDate: "2024-11-29",
      clicks: 25000,
      cost: 8000,
      revenue: 22500
    },
    {
      id: "4",
      name: "Holiday Special",
      startDate: "2024-12-10",
      endDate: "2024-12-31",
      clicks: 15000,
      cost: 6000,
      revenue: 15000
    },
    {
      id: "5",
      name: "Spring Launch",
      startDate: "2024-03-01",
      endDate: "2024-03-31",
      clicks: 10000,
      cost: 4000,
      revenue: 9300
    }
  ];