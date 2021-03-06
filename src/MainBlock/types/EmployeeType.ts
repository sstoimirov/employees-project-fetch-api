export type EmployeeType = {
    uuid: string,
    company: string,
    bio: string,
    name: string,
    title: string,
    avatar: string,
    colorValue: string
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
    onColorChanged: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}