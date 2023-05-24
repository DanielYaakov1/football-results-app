interface ISorting {
  selectedStatus: string;
  // eslint-disable-next-line no-unused-vars
  handleStatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  statusOptions: string[];
}
export const Sorting = ({
  selectedStatus,
  handleStatusChange,
  statusOptions,
}: ISorting) => {
  return (
    <select value={selectedStatus} onChange={handleStatusChange}>
      {statusOptions.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
};
