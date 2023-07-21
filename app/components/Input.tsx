type InputTextProps = {
  styles: {
    input: string;
    error: string;
  };
  name: string;
  required?: boolean;
  emptyMessage?: string;
  validatorType?: string;
  validatorValue?: any;
  invalidMessage?: string;
  register: any;
  formState: any;
};
// ----------------------------------------------------------------------
export function InputText({
  styles,
  name,
  required = true,
  emptyMessage = "Please complete field",
  validatorType,
  validatorValue,
  invalidMessage = "Please enter valid input",
  register,
  formState,
}: InputTextProps) {
  const validationObject:any = {};
  required &&
    (validationObject.required = { value: true, message: emptyMessage });
  validatorType &&
    (validationObject[validatorType] = {
      value: validatorValue,
      message: invalidMessage,
    });

  const error =
    styles.error +
    (formState.errors[name] ? " opacity-1 transition-opacity" : " opacity-0 ");

  return (
    <div>
      <input
        className={styles.input}
        placeholder={name}
        {...register(name, validationObject)}
      />
      <p className={error}>
        {formState.errors[name] ? formState.errors[name].message : "hidden"}
      </p>
    </div>
  );
}

type InputEmailProps = {
    styles:{
        input:string,
        error:string
    },
  name:string,
  required?:boolean,
  emptyMessage?:string,
  invalidMessage?:string,
  register:any,
  formState:any,
}

export function InputEmail({
    styles,
  name,
  required = true,
  emptyMessage = "Please complete field",
  invalidMessage = "Please enter a valid email address",
  register,
  formState,
}:InputEmailProps) {
  const validationObject:any = {};
  required &&
    (validationObject.required = { value: true, message: emptyMessage });
  validationObject.pattern = {
    value:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: invalidMessage,
  };

  const error =
    styles.error +
    (formState.errors[name] ? " opacity-1 transition-opacity" : " opacity-0 ");

  return (
    <div>
      <input
        className={styles.input}
        placeholder={name}
        {...register(name, validationObject)}
      />
      <p className={error}>
        {formState.errors[name] ? formState.errors[name].message : "hidden"}
      </p>
    </div>
  );
}
