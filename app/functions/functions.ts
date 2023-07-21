
export const cloneObjAndSetValues = (object: {}, value: any) => {
    const newObject: any = {}
    for (const property in object)
        newObject[property] = value
    return newObject
}

export const isEmptyObject = (object: {}) => {
    return (
        (Object.keys(object).length === 0)
            ? true
            : false)
}

export const areAllPropValuesEqualTo = (object: {}, value: any) => {
    const newArray = (Object.values(object))
    return (newArray.every((element) => (element === value)))
}

export const getObjectById = (array: [], id: number | string) => {
    return array.filter((current: { id: number | string }) => (current.id === id))
}

export const getAllOfSpecificIndex = (array: [], index: number) => {
    if (index >= array.length) return

    const newArray: any[] = []
    for (let i = 0; i < array.length; i++)
        newArray.push(array[i][index])
    return newArray
}

export const createAscendingArray = (arrayLength: number, startingValue: number) => {
    const newArray: number[] = []
    for (let i = startingValue; i < arrayLength + startingValue; i++)
        newArray.push(i)
    return newArray
}

export const createObjFromPropArray = (array: [], initialValue: any) => {
    const newObject: any = {}
    array.forEach((current) => {
        newObject[current] = initialValue
    })
    return newObject
}

// creates an object with property values equal to arrays
export const createObjOfArrays = (propArray: [], arrayLength: number, initialValue: any) => {
    const newObject: any = {}
    propArray.forEach((current: string) => {
        const newArray = []
        for (let i = 0; i < arrayLength; i++)
            newArray.push(initialValue)
        newObject[current] = newArray
    })
    return newObject
}

export const randomizeArray = (array: []) => {
    const newArray: [] = []
    while (array.length !== 0) {
        const randomIndex = Math.floor((Math.random() * array.length))
        newArray.push(...array.splice(randomIndex, 1))
    }
    return newArray
}




