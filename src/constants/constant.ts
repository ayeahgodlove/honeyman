export const TOKEN_KEY = "TOKEN_KEY";
export const USER_DATA = "USER_DATA";
import type { ThemeConfig } from 'antd';

export const THEME: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#81ce89',
  },
};

export enum AVAILABILITY_STATUS {
  IN_STOCK = "IN_STOCK",
  OUT_STOCK = "OUT_STOCK"
}
