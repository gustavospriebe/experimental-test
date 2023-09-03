import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";
import useData from "@/hooks/useFetch";

export default async function Home() {
  const products = await useData();


  return (
    <div className="w-full h-full flex flex-col mt-10 items-center gap-8">
      <h1>Search</h1>

      <SearchInput />
      <SearchResults products={products} />
    </div>
  );
}
