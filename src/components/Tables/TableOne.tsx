import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Loader from '@/common/Loader';
import { Translatable, Modal } from "@/components/index";
import { useGetAllExpensessQuery, useDeleteExpensesMutation } from '@/redux/services/expenses';
import * as T from "@/types/expenses";
import toast, { Toaster } from 'react-hot-toast';

const TableOne = () => {
  const [expensesData, setExpensesData] = useState<T.Expense[]>([]);

  const { data, isLoading, refetch } = useGetAllExpensessQuery<any>({});

  const [deleteFnc] = useDeleteExpensesMutation<any>({});


useEffect(()=>{refetch()},[])


  const handleExpensesDelete = async (id: number) => {
    try {
      const res = await deleteFnc(id);

      if (res.error) {
        toast.error("Something Went Wrong");
      } else if (res && res.data == null) {
        toast.success("Expenses deleted successfully");
        refetch()
      }

    } catch (error: any) {
      toast.error(`Something Went Wrong ${error.message}`);
    }
  };

  useEffect(() => {
    if (data) {
      setExpensesData(data);
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (expensesData.length === 0) return <h1 className='text-center capitalize'>No expenses data available</h1>;

  // Define array for table headers
  const tableHeaders = [
    { key: "id", label: "ID", width: "100px" },
    { key: "date", label: "Date", width: "150px" },
    { key: "paid_to", label: "Paid To", width: "200px" },
    { key: "amount", label: "Amount", width: "150px" },
    { key: "cheque_no", label: "Cheque No", width: "150px" },
    { key: "bank", label: "Bank", width: "200px" },
    { key: "sum_of_sr", label: "Sum of SR", width: "150px" },
    { key: "for_what", label: "For What", width: "200px" },
    { key: "invoice_number", label: "Invoice Number", width: "150px" },
    { key: "due_date", label: "Due Date", width: "150px" },
    { key: "tax_amount", label: "Tax Amount", width: "150px" },
    { key: "currency", label: "Currency", width: "150px" },
    { key: "supplier", label: "Supplier", width: "200px" },
    { key: "actions", label: "Actions", width: "100px" },
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Expenses
      </h4>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left dark:bg-meta-4">
              {tableHeaders.map((header) => (
                <th key={header.key} className={`min-w-[${header.width}] py-4 px-4 font-medium text-black dark:text-white xl:pl-11`}>
                  <Translatable text={header.label} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {expensesData.map((expense: T.Expense) => (
              <tr key={expense.id} className="border-b border-gray-300 dark:border-strokedark">
                {tableHeaders.map((header) => (
                  <td key={header.key} className="py-3 px-4">
                    {header.key === "actions" ? (
                      <div className="flex items-center gap-2">
                        <button className="text-black hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center">
                          <Modal deleteFnc={() => handleExpensesDelete(expense.id)} />
                        </button>
                        <button className="text-black dark:text-white hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center">
                          <MdEdit />
                        </button>
                      </div>
                    ) : (
                      <Translatable text={expense[header.key as keyof T.Expense]} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster />
      </div>
    </div>
  );
};

export default TableOne;
