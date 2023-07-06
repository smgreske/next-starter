
export const cloneObjAndAddPropById = (dataArray, id, property, value) => {
  return (
    dataArray.map( (current, index) => {
        if (index === cardSelected1 || index === cardSelected2)
          return {...current, matched:true}
        else
          return current        
      })
  )   
}

export const cloneObjAndSetValues = (object, value) => {
  let newObject = {}
  for (const property in object)
    newObject[property] = value
  return newObject
}

export const isEmptyObject = (object) => {  
  return (
    (Object.keys(object).length === 0)
    ? true
    : false )
}

export const areAllPropValuesEqualTo = (object, value) => {
  const newArray = (Object.values(object))
  return (newArray.every( (element) => (element === value)))
}

export const getObjectById = (array, id) => {
  return array.filter(current => (current.id === id))
}

export const getAllOfSpecificIndex = (array, index) => {
  if (index >= array.length) return

  const newArray = []
  for (let i = 0; i < array.length; i++) 
    newArray.push(array[i][index])      
  return newArray
}

export const createAscendingArray = (arrayLength, startingValue) => {
  const newArray = []
  for (let i = startingValue; i < arrayLength + startingValue; i++)
    newArray.push(i) 
  return newArray
}


export const createObjFromPropArray = (array, initialValue) => {
  const newObject = {}
  array.forEach( (current) => {
    newObject[current] = initialValue
  })
  return newObject
}

// creates an object with property values equal to arrays
export const createObjOfArrays = (propArray, arrayLength, initialValue) => {
  const newObject = {}
  propArray.forEach( (current) => {
    const newArray = []
    for (let i = 0; i < arrayLength; i++)
      newArray.push(initialValue)
    newObject[current] = newArray
  })
  return newObject
}

export const randomizeArray = (array) => {
  const newArray = []   
  while (array.length !== 0) {
    const randomIndex = Math.floor((Math.random()*array.length))    
    newArray.push(...array.splice(randomIndex, 1))
  }
  return newArray
}




