'use client'
import { useForm } from 'react-hook-form'

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

export function InputText({ name, styles,
  required='true', emptyMessage='Please complete field', 
  validatorType, validatorValue, invalidMessage='Please enter valid input', 
  register, formState}) {

    const validationObject = {}
    required && (validationObject.required = {value:true, message: emptyMessage})
    validatorType && (validationObject[validatorType] = {value:validatorValue, message:invalidMessage})

    const errorName = styles.error + 
      (formState.errors[name] ? ' opacity-1 transition-opacity' : ' opacity-0 ')

    return (
      <div>
        <input className={styles.input}               
          placeholder={name}  
          {...register(name, validationObject)}/>
        <p className={errorName}>{formState.errors[name] ? formState.errors[name].message : 'hidden' }</p>
      </div>
    )
}

export function InputEmail({ name, styles,
  required='true', emptyMessage='Please complete field', 
  invalidMessage='Please enter a valid email address', 
  register, formState}) {

    const validationObject = {}
    required && (validationObject.required = {value:true, message: emptyMessage})
    validationObject.pattern = {
      value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
      message:invalidMessage
    }

    const errorName = styles.error + 
      (formState.errors[name] ? ' opacity-1 transition-opacity' : ' opacity-0 ')

    return (
      <div>
        <input className={styles.input}           
          placeholder={name}  
          {...register(name, validationObject)}/>
        <p className={errorName}>{formState.errors[name] ? formState.errors[name].message : 'hidden' }</p>
      </div>
    )
}

