'use client'
import { useForm } from 'react-hook-form'

import { InputText, InputEmail } from 'components/InputComponents'

export default function Form() {
  const { register, handleSubmit, formState} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const form = `
    text-[--neutral-3] bg-[--neutral-3]     
    mx-auto my-20 p-4
    max-w-md 
  `
  const button = ` 
    text-[--neutral-3]  bg-[--neutral-2]  hover:text-[--neutral-1]
    px-3 py-1
      
      `
  const inputStyles = {
      input: ` 
          text-[--neutral-3]  bg-[--neutral-1] 
          py-4 pl-4
          w-full
      `,
      error: ` 
          text-[--neutral-1]
          p-1
          text-end  text-sm  
      `,
  }

    return (
      <form className={form} 
        onSubmit={handleSubmit(onSubmit)}>
        
        <InputText register={register} formState={formState}
          name='Input 1'
          styles={inputStyles}            
        />

        <InputText register={register} formState={formState}
          name='Input 2'
          styles={inputStyles}
          required={true}
          emptyMessage='Custom Empty Message'
          validatorType='minLength'
          validatorValue={5}
          invalidMessage='Must be More that 5 Characters'             
        />
        
        <button className={button}
          type='submit'>
          send message
        </button>
      </form>
)
}

