import { format } from 'date-fns';
import { useState } from 'react';
import { Calendar } from 'phosphor-react';
import { Button, DatePicker, Popover, PopoverContent, PopoverTrigger } from 'keep-react';

interface DatePickerCProps {
    value: string | any;
    onChange: (date: Date | null) => void;
    onBlur: () => void;
}

const DatePickerC = ({ value, onChange, onBlur }: DatePickerCProps) => {
    const [date, setDate] = useState<string | any>(value);

    const handleSelect = (selectedDate: string | any) => {
        setDate(selectedDate);
        onChange(selectedDate);
    };

    return (
        <Popover showArrow={false} placement="bottom-start">
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    className="text-sm w-full h-12"
                    variant="outline"
                    color="secondary"
                    onBlur={onBlur}
                >
                    <Calendar size={20} className="text-metal-400 dark:text-white" />
                    {date ? format(date, 'PPP') : <span>Select Your Date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="z-50 max-w-min">
                <DatePicker
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
                    showOutsideDays={true}
                />
            </PopoverContent>
        </Popover>
    );
};

export default DatePickerC;
