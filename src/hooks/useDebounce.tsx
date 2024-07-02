import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T | null {
    const [debouncedValue, setDebouncedValue] = useState<T | null>(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [value]);

    return debouncedValue;
}