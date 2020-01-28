export type EmployeeType = {
    uuid: string
    company: string
    bio: string
    name: string
    title: string
    avatar: string,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onChange: (e: React.MouseEvent<HTMLSelectElement>) => void;
    onChangeColor: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    colorValue: string;
}