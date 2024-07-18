"use client";

import { API_URL_UPLOADS_POSTS } from "@constants/api-url";
import {
  DateField,
  ImageField,
  MarkdownField,
  NumberField,
  Show,
  TextField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { format } from "@utils/format";
import { Typography } from "antd";

const { Title } = Typography;

export default function BlogPostShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "categories",
    id: record?.category?.id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id ?? ""} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"Content"}</Title>
      {/* <MarkdownField value={record?.content} /> */}
      <div
        style={{ padding: 10, background: "#f2f2f2" }}
        dangerouslySetInnerHTML={{
          __html: record?.content,
        }}
      />
      <Title level={5}>{"Category"}</Title>
      <TextField
        value={
          categoryIsLoading ? <>Loading...</> : <>{categoryData?.data?.title}</>
        }
      />
      <ImageField
        imageTitle={record?.title}
        value={`${API_URL_UPLOADS_POSTS}/${record?.imageUrl}`}
      />
      <Title level={5}>{"Status"}</Title>
      <TextField value={record?.status} />
      <Title level={5}>{"CreatedAt"}</Title>
      <DateField value={format.date(record?.createdAt)} />
    </Show>
  );
}
