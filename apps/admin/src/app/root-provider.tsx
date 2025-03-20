"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";

import "@ant-design/v5-patch-for-react-19";

import { ConfigProvider } from "antd";

import { TRPCReactProvider } from "~/trpc/react";

export function RootProvider(props: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <AntdRegistry>
        <ConfigProvider>{props.children}</ConfigProvider>
      </AntdRegistry>
    </TRPCReactProvider>
  );
}
