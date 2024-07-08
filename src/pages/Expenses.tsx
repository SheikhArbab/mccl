import { useEffect, useState, useRef } from "react";
import { MdEdit } from "react-icons/md";
import Loader from '@/common/Loader';
import { Translatable, Modal, Breadcrumb } from "@/components/index";
import { useGetAllExpensesQuery, useDeleteExpensesMutation } from '@/redux/services/expenses';
import * as T from "@/types/expenses";
import toast, { Toaster } from 'react-hot-toast';
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CSVLink } from 'react-csv';

const Expenses = () => {
    const [expensesData, setExpensesData] = useState<T.Expense[]>([]);
    const [filters, setFilters] = useState({
        date: "",
        paidTo: "",
        amount: "",
        chequeNo: "",
        bank: "",
        invoiceNumber: "",
        dueDate: "",
        supplier: "",
    });

    const csvLink:any = useRef<CSVLink>(null);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const { data, isLoading, refetch } = useGetAllExpensesQuery<any>(filters);
    const [deleteFnc] = useDeleteExpensesMutation<any>({});

    useEffect(() => {
        refetch();
    }, [filters]);

    useEffect(() => {
        if (data) {
            setExpensesData(data);
        }
    }, [data]);

    const handleExpensesDelete = async (id: number) => {
        try {
            const res = await deleteFnc(id);

            if (res.error) {
                toast.error("Something Went Wrong");
            } else if (res && res.data == null) {
                toast.success("Expenses deleted successfully");
                refetch();
            }
        } catch (error: any) {
            toast.error(`Something Went Wrong ${error.message}`);
        }
    };

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

    const handleExportCsv = () => {
        if (csvLink.current) {
            csvLink.current.link.click();
        }
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <div className="border-0">
                <Breadcrumb pageName="Expenses" />
            </div>

            <div className="flex flex-wrap gap-6 items-center justify-between mb-2">
                <Link to={"/add-expenses"} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg md:text-sm px-2 w-fit text-nowrap py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 capitalize text-xs">
                    <Translatable text='add a new expenses / إضافة نفقات جديدة' />
                </Link>

                <button onClick={handleExportCsv} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg md:text-sm px-2 w-fit text-nowrap py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 capitalize text-xs gap-2">
                    <Translatable text='Export / يصدّر' /> <HiOutlineDownload size={18} />
                </button>
            </div>

            <div className="flex flex-wrap items-center gap-5 py-4">
                <div className="flex flex-wrap gap-4">
                    {Object.keys(filters).map(key => (
                        <input
                            key={key}
                            type="text"
                            name={key}
                            placeholder={key}
                            value={filters[key as keyof typeof filters]}
                            onChange={handleFilterChange}
                            className="w-32 rounded border-[1.5px] text-xs border-blue-900 bg-transparent py-2 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    ))}
                </div>
            </div>

            {expensesData.length > 0 ? (
                <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <CSVLink
                        ref={csvLink}
                        data={expensesData}
                        headers={tableHeaders}
                        filename={"expenses.csv"}
                        className="hidden"
                    />

                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-left dark:bg-meta-4">
                                    {tableHeaders.map((header) => (
                                        <th key={header.key} className={`min-w-[${header.width}] py-4 px-4 font-medium text-black dark:text-white xl:pl-11 w-fit text-nowrap`}>
                                            <Translatable text={header.label} />
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {expensesData.map((expense: T.Expense) => (
                                    <tr key={expense.id} className="border-b border-gray-300 dark:border-strokedark w-full">
                                        {tableHeaders.map((header) => (
                                            <td key={header.key} className="py-3 px-4">
                                                {header.key === "actions" ? (
                                                    <div className="flex items-center gap-2">
                                                        <button className="text-black hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center">
                                                            <Modal deleteFnc={() => handleExpensesDelete(expense.id)} />
                                                        </button>
                                                        <Link to={`/expenses-settings/${expense.id}`} className="text-black dark:text-white hover:opacity-80 rounded-full w-8 h-8 hover:bg-black/20 flex items-center justify-center">
                                                            <MdEdit />
                                                        </Link>
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
            ) : (
                <h1 className='text-center capitalize'>No expenses data available</h1>
            )}
        </>
    );
};

export default Expenses;
