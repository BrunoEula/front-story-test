import type { Campaign } from "../campaignTypes/CampaignTypes";

interface Props {
  campaigns: Campaign[];
  onDelete: (id: string) => void;
}

const CampaignTable = ({ campaigns, onDelete }: Props) => {
  return (
    <div className="max-h-[250px] overflow-y-auto border border-gray-200 rounded-lg">
      <table className="min-w-full">
        <thead className="bg-gray-100 text-left text-sm text-gray-600 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Start</th>
            <th className="px-4 py-2">End</th>
            <th className="px-4 py-2">Clicks</th>
            <th className="px-4 py-2">Cost</th>
            <th className="px-4 py-2">Revenue</th>
            <th className="px-4 py-2">Profit</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {campaigns.map((c) => {
            const profit = c.revenue - c.cost;
            return (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 text-left">{c.name}</td>
                <td className="px-4 py-2 text-left">{c.startDate}</td>
                <td className="px-4 py-2 text-left">{c.endDate}</td>
                <td className="px-4 py-2 text-left">{c.clicks}</td>
                <td className="px-4 py-2 text-left">
                  ${c.cost.toLocaleString()}
                </td>
                <td className="px-4 py-2 text-left">
                  ${c.revenue.toLocaleString()}
                </td>
                <td
                >
                  ${profit.toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onDelete(c.id)}
                    className="text-red-600 hover:underline text-sm border-1 p-2 rounded-md cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignTable;
