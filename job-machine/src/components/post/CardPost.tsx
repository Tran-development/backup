import { Col, Flex, Form } from 'antd';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { BaseInput } from '@/components/common/BaseInput/index';
import { RedoOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
interface FilterPostProps {
  handleFilter: (filter: string) => void;
}

const FilterPost: React.FC<FilterPostProps> = ({ handleFilter }) => {
  const [form] = Form.useForm();

  const { RangePicker } = DatePicker;

  const handleSearchClick = (value: any) => {
    handleFilter(value);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        layout="horizontal"
        initialValues={{ actionType: 'all' }}
        onFinish={handleSearchClick}
        style={{ width: '100%', alignItems: 'center' }}
        className="filter-section"
      >
        <Col>
          <Flex style={{ justifyContent: 'space-between' }}>
            <Col span={3}>
              <Form.Item name="reset">
                <BaseButton
                  size="large"
                  className="btn-reset"
                  onClick={onReset}
                >
                  <RedoOutlined />
                </BaseButton>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="titleContent" className="input-search">
                <BaseInput
                  placeholder="Nhập tên người dùng, nội dung bài..."
                  style={{ width: '100%', height: '40px', marginLeft: '-58px' }}
                  value="1000"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="datetime">
                <RangePicker showTime className="search-date" />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item name="search">
                <BaseButton size="large" className="btn-find" htmlType="submit">
                  Tìm kiếm
                </BaseButton>
              </Form.Item>
            </Col>
          </Flex>
        </Col>
      </Form>
    </>
  );
};

export default FilterPost;
