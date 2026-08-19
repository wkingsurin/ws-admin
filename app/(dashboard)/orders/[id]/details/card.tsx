import Card from "../../../../../components/card";
import DetailsData from "./details-data";
import Status from "./status";
import { DetailRow } from "../types";

interface DetailsCardProps {
  title: string;
  status?: string;
  data: DetailRow[];
}

export default function DetailsCard({ title, status, data }: DetailsCardProps) {
  return (
    <Card className="flex flex-col gap-3 w-full h-full">
      <div className="flex items-center gap-3 ">
        <span className="font-medium text-base">{title}</span>
        {status && <Status label={status} />}
      </div>
      <DetailsData data={data} />
    </Card>
  );
}
