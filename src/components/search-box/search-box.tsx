import { SearchOutlined } from "@ant-design/icons";
import { Badge, Button, Form, Input, Popover } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBox() {
  const [form] = Form.useForm();
  const [popovervisible, setPopovervisible] = useState(false);
  const navigator = useRouter();

  const handlePopoverChange = (newOpen: boolean) => {
    setPopovervisible(newOpen);
  };

  const onFinish = ({ query }: {query: string}) => {
    setPopovervisible(false);
    navigator.push(`/products/search?q=${query}`);
  };

  const SearchBoxForm = () => {
    return (
      <Form
        layout="inline"
        form={form}
        onFinish={onFinish}
        style={{
          width: "340px",
          maxWidth: "68vw",
        }}
      >
        <Form.Item name="query">
          <Input
            placeholder="iphone, watch, shoes ..."
            style={{ minWidth: "220px", maxWidth: "45%" }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Popover
      placement="bottomRight"
      title={"Searching products"}
      content={<SearchBoxForm />}
      trigger="click"
      open={popovervisible}
      onOpenChange={handlePopoverChange}
      style={{
        overflow: "hidden",
      }}
    >
      <Badge dot>
        <SearchOutlined className="searchIcon" />
      </Badge>
    </Popover>
  );
}

export default SearchBox;
