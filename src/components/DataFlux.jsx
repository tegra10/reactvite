const DataFlux = ({ onHandle, children}) => {
    return (
        <>
            <input type="text" onChange={e => onHandle(e.target.value)} />
            {children}
        </>
    );
};

export default DataFlux;
