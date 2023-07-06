import { useRef } from "react"

export function useDisplayInfo(name, value1=null, value2=null, value3=null, value4=null) {
  console.log('---------------------------------------')
  useRenderCount(name)
  value1 != null && console.log(value1)
  value2 != null && console.log(value2)
  value3 != null && console.log(value3)
  value4 != null && console.log(value4)
}

export function useRenderCount(name) {
  const count = useRef(0)
  count.current++
  console.log(`${name}: ${count.current} renders`)
}


