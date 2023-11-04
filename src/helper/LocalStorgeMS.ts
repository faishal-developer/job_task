/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
//todo: this will do with redux persist

export const properties = {
  cart: "cart",
};

export const createDataLS = (data: any, property: string) => {
  let newData = JSON.stringify(data);
  localStorage.setItem(property, newData);
};

export const getDataLS = (property: string) => {
  let data = localStorage.getItem(property);
  return JSON.parse(data as string);
};

export const DeleteDataLS = (property: string) => {
  localStorage.removeItem(property);
};

export const setTitle = (title: string) => {
  document.title = title;
};
