import React from 'react';
import { Row, Col, Flex, Popconfirm, Checkbox } from 'antd';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';

interface BulkActionsProps {
  col: number;
  selectedPosts: string[];
  handleCheckAll: () => void;
  handleDeleteAllSelected: () => void;
  handleActiveAllSelected: () => void;
  isAllSelected: boolean;
}

const BulkActions: React.FC<BulkActionsProps> = ({
  col,
  selectedPosts,
  handleCheckAll,
  handleDeleteAllSelected,
  handleActiveAllSelected,
  isAllSelected
}) => {
  return (
    <Col span={24}>
      <Row className={col === 24 ? 'middle-container-row' : ''}>
        <Flex
          gap={10}
          style={{ alignItems: 'center' }}
          className="bulk-actions"
        >
          <Checkbox
            className="check-all"
            onChange={handleCheckAll}
            checked={isAllSelected}
          >
            Check All
          </Checkbox>
          {selectedPosts.length > 0 && (
            <>
              <Popconfirm
                title="Xác nhận xoá tất cả?"
                onConfirm={handleDeleteAllSelected}
              >
                <BaseButton size="large" className="btn-delete-all">
                  Xóa
                </BaseButton>
              </Popconfirm>
              <BaseButton
                size="large"
                className="btn-accept-all"
                onClick={handleActiveAllSelected}
              >
                Duyệt
              </BaseButton>
            </>
          )}
        </Flex>
      </Row>
    </Col>
  );
};

export default BulkActions;
