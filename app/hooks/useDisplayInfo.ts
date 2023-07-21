import { useRef } from "react"

export function useDisplayInfo(name: string, value1: any, value2?: any, value3?: any, value4?: any): void {
    console.log('---------------------------------------')
    useRenderCount(name)
    value1 != null && console.log(value1)
    value2 != null && console.log(value2)
    value3 != null && console.log(value3)
    value4 != null && console.log(value4)
}

export function useRenderCount(name: string): void {
    const count = useRef(0)
    count.current++
    console.log(`${name}: ${count.current} renders`)
}


