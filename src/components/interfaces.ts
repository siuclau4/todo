export interface ITodoItem {
  createdAt: number;
  done: boolean;
  id: string;
  name: string;
  deleteItem: (id: string) => Promise<void>;
  editItem: (id: string, done: boolean) => Promise<void>;
}
