export type PaginationType = {
    currentPage: number
    employeesPerPage: number,
    totalEmployees: number,
    isDisabledDec: boolean,
    isDisabledInc: boolean,
    updateCurrentPage: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onClickInc: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onClickDec: (e: React.MouseEvent<HTMLButtonElement>) => void
}