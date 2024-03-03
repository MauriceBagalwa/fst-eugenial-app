export interface I_Input {
  id: string;
  field_name: string;
  label?: string;
  as: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  rules: string;
}

export interface IMenu {
  name: string;
  link: string;
  icon?: any;
}
