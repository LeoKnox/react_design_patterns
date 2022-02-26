export const NumberedList = ({
    items,
    resourceName,
    itemComponent: ItemComponents,
}) => {
    return (
        <>
            {items.map((item, index) => (
                <>
                <h3>{index+1}</h3>
                <ItemComponents key={index} {...{[resourceName]: item}} />
                </>
            ))}
        </>
    )
}