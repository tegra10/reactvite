import { useState, useEffect } from "react";

const Effect = () => {
    const [value, setValue] = useState(5);
    const [secondValue, setSecondValue] = useState(value);

    const handleCount = e => {
        setValue(e.target.value);
        setSecondValue(e.target.value);
    };
    useEffect(() => {
        if (secondValue <= 0) {
            setSecondValue(value);
        }
        const count = setInterval(function () {
            setSecondValue(v => {
                if (v <= 0) {
                    clearInterval(count);
                    return 0;
                }
                return v - 1;
            });
        }, 1000);
        return () => {
            clearInterval(count);
        };
    }, [value]);

    return (
        <>
            <div>
                <input type="number" value={value} onChange={handleCount} />
                <p>{secondValue}</p>
            </div>
        </>
    );
};

export default Effect;
