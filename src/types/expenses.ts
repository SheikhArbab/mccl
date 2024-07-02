export type Expense = {
    id: number;
    batch_id: number;
    date: string;
    paid_to: string;
    amount: number;
    cheque_no: string;
    bank: string;
    sum_of_sr: string;
    for_what: string;
    invoice_number: number;
    due_date: string;
    tax_amount: number;
    currency: string;
    supplier: string;
};



export interface ExpensesSearchParams {
    date?: string;
    paidTo?: string;
    amount?: string;
    chequeNo?: string;
    bank?: string;
    sumOfSr?: string;
    forWhat?: string;
    invoiceNumber?: string;
    dueDate?: string;
    taxAmount?: string;
    currency?: string;
    supplier?: string;
  }