/* eslint-disable @typescript-eslint/no-explicit-any */
export const getErrorMessageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  // let obj = errors
  // let propertyPath = "admin.name.firstName"
  // let propertyPath = "admin.name.lastName"

  const properties = propertyPath.split(".");
  // ["admin","name","firstName"]
  // ["admin","name","lastName"]
  let value = obj;

  for (const prop of properties) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }

  return value.message;
};

export interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  icon: string;
}
