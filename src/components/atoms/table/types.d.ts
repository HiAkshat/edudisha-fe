export type SortDirection = "asc" | "desc"

export interface SortState {
  column: string
  direction: SortDirection
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  rowCount: number
  pageIndex: number
  pageSize: number
  onPaginationChange: OnChangeFn<PaginationState>
  sortState: SortState
  onSortChange: (newColumn: string, newDirection: SortDirection) => void
}