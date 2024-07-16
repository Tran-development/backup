import { Table } from './BaseTable.styled';

export type BaseTableProps = React.ComponentProps<typeof Table<any>>;


export const BaseTable: React.FC<BaseTableProps> = (props) => {
  return <Table {...props} />;
};
