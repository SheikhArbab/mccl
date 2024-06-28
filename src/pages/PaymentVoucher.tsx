import { FC, useEffect, useState } from 'react'

const PaymentVoucher: FC = () => {

    const [imagePreview, setImagePreview] = useState<string>("");

    useEffect(() => {

        document.title = 'Payment Voucher | Metal Collection .Co LTD'

    }, [])


    const handleFileInputChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className='flex flex-wrap items-center justify-between p-8 w-full '>


            {/* left side start */}
            <div className='flex flex-col gap-7'>

                <div className='flex items-center gap-2'>
                    <label htmlFor="firstDate">Date: التاريخ</label>
                    <input type="date" id='firstDate' name='firstDate' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="paidTo">Paid To Mr./Messers: اصرفو لأمر السيد / السادة</label>
                    <input type="text" id='paidTo' name='paidTo' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="amount">The Amount of: مبلغ وقدرة</label>
                    <input type="text" id='amount' name='amount' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="cashCheque">Cash / Cheque No: نقداً / شيك رقم</label>
                    <input type="number" id='cashCheque' name='cashCheque' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="bank">Bank: البنك</label>
                    <input type="text" id='bank' name='bank' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="sum">The Sum of S.R.: مبلغ وقدره</label>
                    <input type="text" id='sum' name='sum' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="for">For: مدات مقاول</label>
                    <textarea id="for" name="for" className='focus:outline-none border-0 border-b border-myGray'></textarea>
                </div>

                {/* Additional fields */}
                <div className='flex items-center gap-2'>
                    <label htmlFor="invoiceNumber">Invoice Number: رقم الفاتورة</label>
                    <input type="text" id='invoiceNumber' name='invoiceNumber' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="dueDate">Due Date: تاريخ الاستحقاق</label>
                    <input type="date" id='dueDate' name='dueDate' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="taxAmount">Tax Amount: مبلغ الضريبة</label>
                    <input type="text" id='taxAmount' name='taxAmount' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="currency">Currency: العملة</label>
                    <input type="text" id='currency' name='currency' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

                <div className='flex items-center gap-2'>
                    <label htmlFor="supplier">Supplier: المورد</label>
                    <input type="text" id='supplier' name='supplier' className='focus:outline-none border-0 border-b border-myGray' />
                </div>

            </div>

            {/* left side end */}





            {/* right side start */}
            <div className='flex flex-col gap-8'>
                <h1 className='font-bold text-center capitalize text-3xl'>
                    preview / معاينة
                </h1>

                <div className='flex flex-col gap-7'>
                    {/* Input for file upload */}
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleFileInputChange}
                    />

                    {/* Image preview */}
                    {imagePreview && (
                        <div className='flex justify-center'>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className='max-w-full max-h-96'
                            />
                        </div>
                    )}
                </div>
            </div>
            {/* right side end */}


        </section>
    )
}

export default PaymentVoucher