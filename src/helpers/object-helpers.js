export const updateObjectInArrey = (item, itemsId, objropName, newObjProps) => {
    return item.map(u => {
        if (u[objropName] === itemsId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}