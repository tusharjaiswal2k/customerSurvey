import { useEffect, useRef } from "react";

interface IRating {
    value: number,
    name?: string,
    id: string,
    currentValue: number
    onValueChange: (event: any) => void | any;
}

export function Rating({ value, name, id, currentValue, onValueChange }: IRating) {
    const labelRef: any = useRef(null);
    useEffect(() => {
        if (labelRef) {
            labelRef?.current?.setAttribute('data-content', value)
        }

    }, [labelRef])
    return (
        <>
            <input onChange={onValueChange} type="radio" value={value} checked={currentValue == value} name={name} id={id} />
            <label ref={labelRef} htmlFor={id} ></label>

        </>
    )
}