export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface search {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface searchProviderProps {
  children: React.ReactNode;
}
