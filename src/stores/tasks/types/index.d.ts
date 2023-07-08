export interface Task {
  id: string,
  created: string,
  updated: string,
  name: string
}

export interface Filters {
  limit: number,
  field: 'status',
  status: 'all' | "new" | 'inProgress' | 'success' | 'canceled'
}

export interface Sorting {
  field: string,
  order: 'asc' | 'desc'
}

export interface OrderMap {
  descend: 'desc',
  ascend: 'asc'
}

export type RecordHandler = ({ record }: {record: Task}) => void
export type EditorHander = (id: string) => void
export type SetTask = ({ id, name, status, description }: { id: string, name: string, status: string, description: string }) => void