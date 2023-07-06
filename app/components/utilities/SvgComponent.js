import React from 'react'

export default function SvgComponent({ styles, attributes }) {



  return (
  <div className={styles.container}>
    
    {attributes && 
    <svg 
      className={styles.svg} 
      viewBox={`0 0 ${attributes.width} ${attributes.height}`} 
      fill-rule="nonzero" 
      xmlns={attributes.xmlns}>
      {attributes.svgBody}
    </svg>}
    
  </div>
  )
}
