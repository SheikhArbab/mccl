import { format } from 'date-fns';
import { useState } from 'react';
import { Calendar } from 'phosphor-react';
import { Button, DatePicker, Popover, PopoverContent, PopoverTrigger } from 'keep-react';

const DatePickerC = () => {
    const [date, setDate] = useState<Date>();

    return (
        <Popover showArrow={false} placement="bottom-start">
            <PopoverTrigger asChild>
                <Button
                    className="w-[286px] justify-start gap-2 rounded-xl border border-metal-50 px-4 text-left text-body-4 font-normal text-metal-600 hover:bg-white active:focus:scale-100 dark:border-metal-900 dark:bg-metal-900 dark:text-white dark:hover:bg-metal-800"
                    variant="outline"
                    color="secondary"
                >
                    <Calendar size={20} className="text-metal-400 dark:text-white" />
                    {date ? format(date, 'PPP') : <span>Select Your Date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="z-50 max-w-min">
                <DatePicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    showOutsideDays={true}
                />
            </PopoverContent>
        </Popover>
    );
}

export default DatePickerC;
