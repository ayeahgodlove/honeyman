"use client";

import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";
import { ICategory } from "@model/category.model";
import { IProduct } from "@model/product.model";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, useSelect } from "@refinedev/core";
import { format } from "@utils/format";
import { Image, Space, Table } from "antd";

export default function BlogPostList() {
  const { tableProps } = useTable<IProduct>({
    syncWithLocation: true,
  });

  const { queryResult } = useSelect<ICategory>({
    resource: "categories",
  });

  const { data } = queryResult;
  console.log("data: ", data);
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="images"
          title={"Image"}
          render={(item) => {
            return (
              <Image
                src={`${API_URL_UPLOADS_PRODUCTS}/${item[0].url}`}
                alt={item?.name}
                height={50}
                width={50}
              />
            );
          }}
        />
        <Table.Column
          dataIndex="id"
          title={"ID"}
          render={(value, record, index) => (
            <span key={value.id}>{format.twoChar((index + 1).toString())}</span>
          )}
        />
        <Table.Column dataIndex="name" title={"Name"} />
        <Table.Column
          dataIndex={"categoryId"}
          title={"Category"}
          render={(value, record) => {
            return data?.data.find((item) => item.id === value)?.name;
          }}
        />
        <Table.Column dataIndex="price" title={"Price"} />
        <Table.Column dataIndex="qtty" title={"Qtty"} />
        <Table.Column dataIndex="rating" title={"weight"} />
        <Table.Column dataIndex="rating" title={"Rating"} />
        <Table.Column dataIndex="availabilityStatus" title={"Status"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
