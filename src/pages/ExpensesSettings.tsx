import { FC, useState } from 'react';
import { Breadcrumb, Spinner, Translatable, DatePicker, FileUpload } from '@/components/index';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { useUpdateExpensesMutation, useGetExpensesByIdQuery } from '@/redux/services/expenses';
import { useParams } from 'react-router-dom';
import Loader from '@/common/Loader';

const ExpensesSettings: FC = () => {

    const [data, { isLoading }] = useUpdateExpensesMutation();

    const { id } = useParams()

    const { data: expensesData, isLoading: expensesIsLoading, refetch } = useGetExpensesByIdQuery(id);



    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const { handleChange, handleSubmit, handleBlur, touched, errors, values, setFieldValue } = useFormik({
        enableReinitialize: true,
        initialValues: {
            date: (expensesData && expensesData.date) || "",
            bank: (expensesData && expensesData.bank) || "",
            paid_to: (expensesData && expensesData.paid_to) || "",
            supplier: (expensesData && expensesData.supplier) || "",
            batch_id: (expensesData && expensesData.batch_id) || 0,
            amount: (expensesData && expensesData.amount) || 0,
            cheque_no: (expensesData && expensesData.cheque_no) || "",
            sum_of_sr: (expensesData && expensesData.sum_of_sr) || "",
            for_what: (expensesData && expensesData.for_what) || "",
            invoice_number: (expensesData && expensesData.invoice_number) || 0,
            due_date: (expensesData && expensesData.due_date) || "",
            tax_amount: (expensesData && expensesData.tax_amount) || 0,
            currency: (expensesData && expensesData.currency) || "SAR",
            receipt_images: (expensesData && expensesData.receipt_images) || []
        },

        validationSchema: Yup.object({
            date: Yup.string().required('Date is required'),
            batch_id: Yup.number().required('Batch ID is required').integer('Batch ID must be an integer'),
            paid_to: Yup.string().required('Paid to is required'),
            amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
            cheque_no: Yup.string().required('Cheque number is required').length(6, 'Cheque number must be 6 characters'),
            bank: Yup.string().required('Bank is required'),
            sum_of_sr: Yup.number().required('Sum of SR is required').positive('Sum of SR must be positive'),
            for_what: Yup.string().required('For what is required'),
            invoice_number: Yup.number().required('Invoice number is required').integer('Invoice number must be an integer'),
            due_date: Yup.string().required('Due date is required'),
            tax_amount: Yup.number().required('Tax amount is required').positive('Tax amount must be positive'),
            currency: Yup.string().required('Currency is required'),
            supplier: Yup.string().required('Supplier is required')
        }),

        onSubmit: async (formValues) => {
            const { date, due_date, ...rest } = formValues;

            const formatDate = (dateString: string | undefined) => {
                if (!dateString) return '';
                const dateObj = new Date(dateString);
                const year = dateObj.getFullYear();
                const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
                const day = ('0' + dateObj.getDate()).slice(-2);
                return `${year}-${month}-${day}`;
            };

            try {
                const base64Promises = uploadedFiles.map(file => {
                    return new Promise<string>((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result as string);
                        reader.onerror = error => reject(error);
                    });
                });

                const base64Strings = await Promise.all(base64Promises);


                const res = await data({ id, data: { ...rest, date: formatDate(date), due_date: formatDate(due_date), receipt_images: base64Strings } });

                if (res.error) toast.error("Something Went Wrong!");
                if (res.data) {
                    toast.success("Expenses Added Successfully")
                    refetch()
                };
            } catch (error) {
                toast.error("Something Went Wrong!");
            }
        },
    });


    // Function to handle files change from FileUpload component
    const handleFilesChange = (files: File[]) => {
        setUploadedFiles(files);

        // Loop through each file and read it as data URL
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                // reader.result contains the data URL
                const dataURL = reader.result as string;
                console.log(dataURL); // Log the data URL (base64 encoded image)
            };
            reader.readAsDataURL(file); // Read file as data URL
        });
    };


    if (expensesIsLoading) (<Loader />)

    return (
        <>
            <Breadcrumb pageName="Add Expenses" goTo='tables' />

            <section className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            <Translatable text={"Add Expenses Form"} />
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="p-6.5 flex gap-5 relative flex-wrap">


                            <div className="md:flex-1">

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row items-center">
                                    <div className='w-60'>
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Select Date / اختر التاريخ
                                        </label>
                                        <DatePicker
                                            value={values.date}
                                            onChange={(date: any) => setFieldValue('date', date)}
                                            onBlur={() => handleBlur({ target: { name: 'date' } })}
                                        />
                                        {touched.date && errors.date && (
                                            <p className="text-red-500 text-xs"><Translatable text={errors.date} /></p>
                                        )}
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white capitalize">
                                            Paid To / المدفوع له
                                        </label>
                                        <input
                                            onChange={handleChange} onBlur={handleBlur} value={values.paid_to}
                                            name='paid_to'
                                            type="text"
                                            placeholder="Enter paid to name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                        {touched.paid_to && errors.paid_to && (
                                            <p className="text-red-500 text-xs"><Translatable text={errors.paid_to} /></p>
                                        )}
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white capitalize">
                                            Bank / البنك
                                        </label>
                                        <input
                                            onChange={handleChange} onBlur={handleBlur} value={values.bank}
                                            name='bank'
                                            type="text"
                                            placeholder="Enter bank name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                        {touched.bank && errors.bank && (
                                            <p className="text-red-500 text-xs"><Translatable text={errors.bank} /></p>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white capitalize">
                                        Supplier / المورد
                                    </label>
                                    <input
                                        onChange={handleChange} onBlur={handleBlur} value={values.supplier}
                                        name='supplier'
                                        type="text"
                                        placeholder="Enter supplier name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {touched.supplier && errors.supplier && (
                                        <p className="text-red-500 text-xs"><Translatable text={errors.supplier} /></p>
                                    )}
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white capitalize">
                                        Amount / المبلغ

                                    </label>
                                    <input
                                        onChange={handleChange} onBlur={handleBlur} value={values.amount}
                                        name='amount'
                                        type="number"
                                        placeholder="Enter amount"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {touched.amount && errors.amount && (
                                        <p className="text-red-500 text-xs"><Translatable text={errors.amount} /></p>
                                    )}
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white capitalize">
                                        Cheque No / رقم الشيك

                                    </label>
                                    <input
                                        onChange={handleChange} onBlur={handleBlur} value={values.cheque_no}
                                        name='cheque_no'
                                        type="text"
                                        placeholder="Enter cheque number"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {touched.cheque_no && errors.cheque_no && (
                                        <p className="text-red-500 text-xs"><Translatable text={errors.cheque_no} /></p>
                                    )}
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white capitalize">
                                        Sum of SR / مجموع SR

                                    </label>
                                    <input
                                        onChange={handleChange} onBlur={handleBlur} value={values.sum_of_sr}
                                        name='sum_of_sr'
                                        type="number"
                                        placeholder="Enter sum of SR"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {touched.sum_of_sr && errors.sum_of_sr && (
                                        <p className="text-red-500 text-xs"><Translatable text={errors.sum_of_sr} /></p>
                                    )}
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white capitalize">
                                        For What / لغرض

                                    </label>
                                    <input
                                        onChange={handleChange} onBlur={handleBlur} value={values.for_what}
                                        name='for_what'
                                        type="text"
                                        placeholder="Enter purpose"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {touched.for_what && errors.for_what && (
                                        <p className="text-red-500 text-xs"><Translatable text={errors.for_what} /></p>
                                    )}
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white capitalize">
                                        Invoice Number / رقم الفاتورة

                                    </label>
                                    <input
                                        onChange={handleChange} onBlur={handleBlur} value={values.invoice_number}
                                        name='invoice_number'
                                        type="number"
                                        placeholder="Enter invoice number"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {touched.invoice_number && errors.invoice_number && (
                                        <p className="text-red-500 text-xs"><Translatable text={errors.invoice_number} /></p>
                                    )}
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white capitalize">
                                        Due Date / تاريخ الاستحقاق

                                    </label>
                                    <DatePicker
                                        value={values.due_date}
                                        onChange={(date: any) => setFieldValue('due_date', date)}
                                        onBlur={() => handleBlur({ target: { name: 'due_date' } })}
                                    />
                                    {touched.due_date && errors.due_date && (
                                        <p className="text-red-500 text-xs"><Translatable text={errors.due_date} /></p>
                                    )}
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white capitalize">
                                        Tax Amount / مبلغ الضريبة

                                    </label>
                                    <input
                                        onChange={handleChange} onBlur={handleBlur} value={values.tax_amount}
                                        name='tax_amount'
                                        type="number"
                                        placeholder="Enter tax amount"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {touched.tax_amount && errors.tax_amount && (
                                        <p className="text-red-500 text-xs"><Translatable text={errors.tax_amount} /></p>
                                    )}
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white capitalize">
                                        Currency / العملة

                                    </label>
                                    <input
                                        onChange={handleChange} onBlur={handleBlur} value={values.currency}
                                        name='currency'
                                        type="text"
                                        placeholder="Enter currency"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                    {touched.currency && errors.currency && (
                                        <p className="text-red-500 text-xs"><Translatable text={errors.currency} /></p>
                                    )}
                                </div>


                                <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    {isLoading ? <Spinner size='6' /> : <Translatable text='Submit' />}
                                </button>

                            </div>

                            <div className="w-full md:w-[40rem] sticky top-24 h-fit">

                                {/* Display uploaded images */}
                                {uploadedFiles.length > 0 && (
                                    <div className="flex  overflow-x-auto gap-4">
                                        {uploadedFiles.map((file, index) => (
                                            <img
                                                key={index}
                                                src={URL.createObjectURL(file)}
                                                alt={`Uploaded file ${index}`}
                                                className="max-w-full h-auto object-contain"
                                            />
                                        ))}
                                    </div>
                                )}
                                <FileUpload onFilesChange={handleFilesChange} />
                            </div>



                        </div>

                    </form>
                </div>

                <Toaster />
            </section>
        </>
    )
}

export default ExpensesSettings;
