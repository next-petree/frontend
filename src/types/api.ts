export type APIError = {
  data: {
    error: string;
    code: number;
  };
  status: number;
  from?: string;
};

export type UserRequest = {
  username: string;
  password: string;
  newPassword?: string;
  id?: number;
  customerId?: number | null;
};

export type PWChangeRequest = {
  newPassword: string;
};

export type UserResponse = {
  id: number;
  username: string;
  authorities: [string];
  customerId: number;
  displayUserName: string;
};

export type ManageRequest = Partial<{
  cuid: string;
  accountId: number;
  customerId: number;
  userName: string;
  visitScript: string;
  viewScript: string;
  orderScript: string;
  searchScript: string;
  productScript: string;
  userScript: string;
  memoScript: string;

  cellPhone: string;
  modifyUserName: string;
  email: string;
  langKey: string;
  password: string;
  authority: string;
  activated: boolean;
  customerName: string;
  address: string;
  corpNum: string;
  repName: string;
  repDivision: string;
  repCellPhone: string;
  repOfficePhone: string;
  repEmail: string;
  memo: string;
  maxAccount: number;
  managerName: string;
  useService: boolean;
  numUsers: number;
  numSites: number;
  numServices: number;

  url: string;
  uname: string;
  siteName: string;
  category: string;
  dumpMethod: string;
  dumpName: string;
  dumpMemo: string;
  services: Array<any>;
  login: string;
}>;

export type AccountResponse = {
  activated: boolean;
  authorities: string[];
  authority: string;
  createdDate: string;
  id: number;
  langKey: string;
  login: string;
  name: string;
  email: string;
  cellPhone: string;
  customer: {
    address: string;
    corpNum: string;
    createdBy: string;
    createdDate: string;
    id: number;
    lastModifiedBy: string;
    lastModifiedDate: string;
    managerName: string;
    maxAccount: number;
    memo: string;
    name: string;
    numServices: number;
    numSites: number;
    numUsers: number;
    repCellPhone: string;
    repDivision: string;
    repEmail: string;
    repName: string;
    repOfficePhone: string;
    useService: boolean;
  };
};

export type AccountsResponse = AccountResponse[];

export type CustomerResponse = {
  address: string;
  corpNum: string;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  managerName: string;
  maxAccount: number;
  memo: string;
  name: string;
  numServices: number;
  numSites: number;
  numUsers: number;
  repCellPhone: string;
  repDivision: string;
  repEmail: string;
  repName: string;
  repOfficePhone: string;
  useService: boolean;
};

export type CustomersResponse = CustomerResponse[];

export type SiteResponse = {
  cuid: string;
  customerId: number;
  customerName: string;
  url: string;
  uname: string;
  name: string;
  category: string;
  memo?: string;
  useService: boolean;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  dumpMethod: string | null;
  dumpName: string | null;
  dumpMemo: string | null;
  services: {
    id: number;
    cuid: string;
    type: "rec" | "etc" | "streaming" | "onSite" | "push";
    autoExtend: boolean;
    contractStatus: boolean;
    contractDate: string;
    contractStart: string;
    contractEnd: string;
    taxInvoiceDate: string;
    memo: string;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    repName: string;
    repEmail: string;
    repCellPhone: string;
    repOfficePhone: string;
    repDivision: string;
  }[];
  customer: {
    id: number;
    name: string;
    address: string;
    corpNum: string;
    repName: string;
    repDivision: string;
    repOfficePhone: string;
    repCellPhone: string;
    repEmail: string;
    memo: string;
    useService: boolean;
    maxAccount: number;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    managerName: string;
    numUsers: number;
    numSites: number;
  };
};

export type SitesResponse = SiteResponse[];

export type ReportRequest = Partial<{
  channel: string;
  cuid: string;
  startDate: string;
  endDate: string;
  unit: string;
}>;

export type ViewStatsResponse = {
  values: {
    noConversionCount: number;
    conversionCount: number;
    revenue: number;
    totalViewCount: number;
    sessionCount: number;
    noViewCount: number;
    noSessionCount: number;
    noRevenue: number;
    viewCount: number;
    noTotalViewCount: number;
  };
  date: string;
}[];

export type RCCodeViewStatsResponse = {
  values: {
    rcCode: string;
    viewCount: number;
  };
  date: string;
}[];

export type ConversionStatsResponse = {
  values: {
    noConversionCount: number;
    conversionCount: number;
    sessionCount: number;
    noSessionCount: number;
  };
  date: string;
}[];

export type RCCodeConversionStatsResponse = {
  values: {
    rcCode: string;
    conversionCount: number;
    sessionCount: number;
  };
  date: string;
}[];

export type RevenueStatsResponse = {
  values: {
    noClickOrderCount: number;
    noClickRevenue: number;
    noClickTotalPurchaseCount: number;
    noOrderCount: number;
    noRevenue: number;
    noTotalPurchaseCount: number;
    orderCount: number;
    revenue: number;
    totalPurchaseCount: number;
  };
  date: string;
}[];

export type RCCodeRevenueStatsResponse = {
  values: {
    revenue: number;
    rcCode: string;
    orderCount: number;
  };
  date: string;
}[];

export type DailyPerformanceResponse = {
  values: {
    conversion1: number;
    conversion2: number;
    conversionCount: number;
    noConversion1: number;
    noConversion2: number;
    noConversionCount: number;
    noOrderCount: number;
    noOrderUser: number;
    noRevenue: number;
    noSessionCount: number;
    noViewCount: number;
    noViewUser: number;
    orderCount: number;
    orderUser: number;
    revenue: number;
    sessionCount: number;
    viewCount: number;
    viewUser: number;
  };
  date: string;
}[];

export type DailySectionResponse = {
  values: {
    conversion1: number;
    conversion2: number;
    conversionCount: number;
    orderCount: number;
    orderUser: number;
    rcCode: string;
    revenue: number;
    sessionCount: number;
    totalViewCount: number;
    viewCount: number;
    viewUser: number;
  };
  date: string;
}[];

export type BrandList = {
  brandId: string;
  cuid: string;
  recType: string;
}[];

export type CategoryList = {
  categoryId: string;
  cuid: string;
  recType: string;
}[];

export type ItemList = {
  itemId: string;
  cuid: string;
  recType: string;
}[];

export type ServiceRequest = Partial<{
  cuid: string;
  brandList: BrandList;
  categoryList: CategoryList;
  itemList: ItemList;
}>;

export type IgnoreItemResponse = {
  createdAt: string;
  cuid: string;
  itemId: string;
  recType: string;
}[];

export type IgnoreCategoryResponse = {
  createdAt: string;
  cuid: string;
  categoryId: string;
  recType: string;
}[];

export type IgnoreBrandResponse = {
  createdAt: string;
  cuid: string;
  brandId: string;
  recType: string;
}[];

export type LogGuideResponse = {
  cuid: string;
  visitScript: string;
  viewScript: string;
  orderScript: string;
  searchScript: string;
  productScript: string;
  userScript: string;
  memoScript: string;
  createdDate: string;
  createdBy: string;
  lastModifiedDate: string;
  lastModifiedBy: string;
};

export type LogCollectStatusResponse = {
  bytes: number;
  cuid: string;
  customerId: number;
  customerName: string;
  dateKey: number;
  errorCount: number;
  errors: string;
  name: string;
  rowCount: number;
  type: string;
  useService: boolean;
}[];

export type RecRequest = Partial<{
  cuid: string;
  apiUrl: string;
  param: string;
  inputList: string[];
}>;

export type RandomRequest = Partial<{
  cuid: string;
  param: string;
}>;

export type RecTypeResponse = {
  cuid?: string;
  using: string[];
  notusing: string[];
};

export type RandomInputResponse = {
  cuid: string;
  result: string;
  type: string;
};

export type RecResultResponse = Partial<{
  recType: string | null;
  iids: string | null;
  cids: string | null;
  exiids: any;
  excids: any;
  rg: any;
  minp: any;
  maxp: any;
  products: any;
  results: any;
  groupedResults: any;
  categorizedResults: any;
  values: {
    neighborItems: any;
    neighborUserIds: any;
    resultItems: any;
    targetItems: any;
  };
}>;

export type RtsRequest = Partial<{
  apiUrl: string;
}>;

export type RtsResultResponse = Partial<{
  nextSeqNum: number | null;
  lastSeqNum: number | null;
  firstSeqNum: number | null;
  querySeg: any;
  size: number;
  type: string;
  dateTime: any;
  items: any;
}>;

export type PersonaRequest = Partial<{
  apiUrl: string;
}>;

export type PersonaResponse = Partial<{
  logicType: string;
  target: string[];
  result: any;
  groupedResults: any;
  persona: any;
}>;

export type DsocDemoRequest = Partial<{
  apiUrl: string;
  token: string;
}>;

export type DsocDemoResponse = Partial<{
  recType: string | null;
  iids: string | null;
  cids: string | null;
  exiids: any;
  excids: any;
  rg: any;
  minp: any;
  maxp: any;
  products: any;
  results: any;
  groupedResults: any;
  categorizedResults: any;
  values: {
    neighborItems: any;
    neighborUserIds: any;
    resultItems: any;
    targetItems: any;
  };
}>;

export type ApiKeyCreateRequest = {
  cuid: string;
  services: string[];
};

export type ApiKeysGetRequest = {
  cuid: string;
};

export type S001ResultResponse = Partial<{
  logicType: string;
  target: string[];
  results: any;
  groupedResults: any;
  persona: any;
}>;

export type ProductInputsRequest = Partial<{
  apiUrl: string;
}>;

export type ProductInputsResponse = Partial<{
  brandNameList: string[];
  categoryList: string[];
}>;

export type ProductListRequest = Partial<{
  apiUrl: string;
}>;

export type ProductTransitionChartRequest = Partial<{
  apiUrl: string;
}>;

export type ProductPerformanceChartRequest = Partial<{
  apiUrl: string;
}>;

export type ProductPerformanceChartResponse = Partial<{
  firstWeekData: {};
  secondWeekData: {};
  thirdWeekData: {};
  fourthWeekData: {};
}>;
