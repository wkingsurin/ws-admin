export default function TablePlaceholder({
  title = "No data available",
  description = "There are currently no records to display.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-sm font-medium text-gray-900">{title}</span>

        <span className="text-xs text-gray-500">{description}</span>
      </div>
    </div>
  );
}
