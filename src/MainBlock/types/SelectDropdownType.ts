import { EmployeeType } from "./EmployeeType";

export type SelectDropdownType = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    optionValue: string;
    employeeProps: EmployeeType;
}