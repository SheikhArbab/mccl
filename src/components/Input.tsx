import  { useState,FC } from "react";
import { BiShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";

interface Props {
    type: string;
    name: string;
    handleChange: any;
    handleBlur: any;
    errors: any;
    touched: any;
    values: any;
    disable?: boolean;
    className?: string;
}

const Input:FC<Props> = (
    { type, name, handleChange, handleBlur, errors, touched, values, disable = false, className }
) => {


    const [isHide, setIsHide] = useState<boolean>(true);

    return (
        <div className={`${className && className} h-20`}>
            <label
                className="font-semibold text-sm text-gray-600 pb-1 block capitalize"
                htmlFor={name}>
                {name}
            </label>

            <div className="relative">
                <input
                    disabled={disable}
                    type={type === "password" ? (isHide ? "password" : "text") : type}
                    name={name}
                    id={name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values[name as keyof typeof values]}
                    className={`border rounded-lg px-3 py-2 text-sm w-full disabled:opacity-50 focus:outline-none focus:border focus:border-APrimary ${type === "file" && 'custom-file-input cursor-pointer'}`} />

                {type === "password" && <button
                    type="button"
                    onClick={() => setIsHide(!isHide)}
                    className="absolute top-1/2 right-4 -translate-y-1/2">{isHide ? <GrFormViewHide /> : <BiShow />}</button>}

            </div>

            {touched[name as keyof typeof touched] && errors[name as keyof typeof errors] && (
                <p className="text-red-500 text-xs ">{errors[name as keyof typeof errors]}</p>
            )}
        </div>
    )

}

export default Input