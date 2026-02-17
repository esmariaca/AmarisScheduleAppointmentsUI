export interface Branch {
  id: number;
  name: string;
  address?: string;
}

export interface Shift {
  id?: number;
  identificationNumber: string;
  branchId: number;
  branch?: Branch;
  createdAt?: string | Date;
  limitTime?: string | Date;
  status?: string;
}