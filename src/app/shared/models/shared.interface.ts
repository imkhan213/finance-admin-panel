export type SelectionMode = 'single' | 'multiple' | 'range';
export type btnType = 'solid' | 'light' | 'outline';
export type BudgetTitle = 'Remaining' | 'Income' | 'Expenses';
export type dropVariType = 'solid' | 'stroke';
export type toastIconType = 'success' | 'error';

export interface TableColumn {
  field: string;
  header: string;
}

export interface TransactionData {
  id: number;
  date: string;
  category: string;
  payee: string;
  amt: number;
  type: string;
}

export interface dropDownList {
  name: string;
  id: number;
  icon?: string;
}
