import { Post, PostStatus } from '@/api/mock/news.api';
export enum CurrencyTypeEnum {
  USD = 'USD',
  ETH = 'ETH',
  BTC = 'BTC'
}
export interface PaymentCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  focused: any;
  background: string;
  isEdit: boolean;
}
export interface FieldInput {
  name: 'email' | 'password' | 'name';
  label: string;
}
export interface Data {
  title: string;
  subTitle1: string;
  fieldInput: FieldInput[];
  subTitle2: string | undefined;
  contentButton: string;
}
export interface DataToogle {
  titleToogle: string;
  subTitleToogle: string;
  buttonToogle: string;
}
export interface FormLoginType {
  email: string;
  password: string;
}
export interface FormRegisterType {
  name: string;
  email: string;
  password: string;
}
export interface CategoryData {
  key: React.Key;
  name: string;
  description: string;
  count: number;
}
export type TypeActivePanel = 'sign-in' | 'sign-up';

export type Severity = 'success' | 'error' | 'info' | 'warning';

export type Dimension = number | string;

export type ColorProperty = 'success' | 'error' | 'warning' | 'default';
export interface ApiResponse {
  status_code: number;
  data: ResponseDataPost;
}
export interface ResponseDataPost {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  items: InforPost[];
  map(arg0: (post: Post, key: number) => JSX.Element): React.ReactNode;
  length: number;
  responType?: string;
  message?: string;
}
export interface InforPost {
  status: any;
  date: string;
  id: number;
  title?: string;
  caption?: string;
  author?: string;
  type_file?: string;
  name_file?: string;
  url_file?: string;
  created_at?: Date;
  like?: number;
  centersor: PostStatus;
}

export interface FormFilterPost {
  search_term: string;
  page: number;
  limit: number;
  orderBy: string;
  status_filter: string;
}
export interface SearchParams {
  Page?: number;
  Limit?: number;
  search_term?: string;
  status_filter?: string;
}
export interface IQuery {
  end_date: string;
  start_date: string;
  page: number;
  limit: number;
  title: string;
}

export interface ICheckbox {
  onCheckboxChange?: (id: string, isChecked: boolean) => void;
  postId?: string;
}
