import React, { useCallback, useEffect, useState } from "react";
import { BaseTable } from "@/components/common/BaseTable";
import { TableRowSelection } from "antd/es/table/interface";
import {
  TreeTableRow,
  Pagination,
  getTreeTableData,
} from "@/api/mock/table.api";
import { useMounted } from "@/hooks/useMounted";
import { ColumnTable } from "@/components/table/ColumnTable";
 
const initialPagination: Pagination = {
  current: 1,
  pageSize: 4,
};
 
export const TreeTable: React.FC = () => {
  const [tableData, setTableData] = useState<{
    data: TreeTableRow[];
    pagination: Pagination;
    loading: boolean;
  }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { isMounted } = useMounted();
 
  const fetch = useCallback(
    (pagination: Pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      getTreeTableData(pagination).then((res) => {
        if (isMounted.current) {
          setTableData({
            data: res.data,
            pagination: res.pagination,
            loading: false,
          });
        }
      });
    },
    [isMounted]
  );
 
  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);
 
  const handleTableChange = (pagination: Pagination) => {
    fetch(pagination);
  };
 
  const rowSelection: TableRowSelection<TreeTableRow> = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: TreeTableRow[],
      info
    ) => {},
    onSelect: (
      record: TreeTableRow,
      selected: boolean,
      selectedRows: TreeTableRow[]
    ) => {},
  };
 
  const columns = [
    {
      title: "Image or Video",
      dataIndex: "name",
      key: "name",
      width: "100px",
    },
    {
      title: "Title",
      dataIndex: "age",
      key: "age",
      width: "12%",
    },
    {
      title: "Category",
      dataIndex: "address",
      width: "30%",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "actions",
      width: "15%",
      render: () => {
        return <ColumnTable />;
      },
    },
  ];
 
  return (
    <BaseTable
      columns={columns}
      dataSource={tableData.data}
      rowSelection={rowSelection}
      pagination={tableData.pagination}
      loading={tableData.loading}
      onChange={handleTableChange}
      scroll={{ x: 800 }}
    />
  );
};
 
