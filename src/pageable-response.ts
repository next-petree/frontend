export interface Pageable<T> extends Page {
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
    offset: number;
  };
  size: number;
  content: T;
  empty: boolean;
}

export interface Page {
  totalPages: number;
  first: boolean;
  last: boolean;
  number: number;
}
