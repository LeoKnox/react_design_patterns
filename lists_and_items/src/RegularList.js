export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponents,
}) => {
    return (
        <>
            {items.map((item, index) => (
                <ItemComponents key={index} {...{[resourceName]: item}} />
            ))}
        </>
    )
}