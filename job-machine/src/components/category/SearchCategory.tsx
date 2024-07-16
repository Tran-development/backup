import { Form, Input, Button, Flex } from 'antd';

const SearchCategory = () => {
  return (
    <div>
      <Form>
        <Flex justify='space-between'>
          <Form.Item>
            <Input style={{ width: '650px' }} />
          </Form.Item>
          <Button>Search Categories</Button>
        </Flex>
      </Form>
    </div>
  );
};

export default SearchCategory;
