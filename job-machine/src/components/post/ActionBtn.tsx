import { Popconfirm } from 'antd';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
interface ActionBtnProps {
  handleDelete: (key: string | number) => void;
  handleAcceptPost: (id: string | number) => void;
  itemKey: string | number;
  col: number;
}

const ActionBtn: React.FC<ActionBtnProps> = ({
  handleDelete,
  handleAcceptPost,
  itemKey,
  col
}) => {
  return (
    <div className={col === 6 ? 'card__action-top' : 'xs_card__action-top'}>
      <Popconfirm
        title={'Bạn có chắc muốn xoá không?'}
        onConfirm={() => handleDelete(itemKey)}
      >
        <BaseButton size="large" className="btn-delete">
          Xóa
        </BaseButton>
      </Popconfirm>
      <BaseButton
        size="large"
        className="btn-accept"
        onClick={() => handleAcceptPost(itemKey)}
      >
        Duyệt
      </BaseButton>
    </div>
  );
};

export default ActionBtn;
