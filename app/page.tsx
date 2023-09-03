import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col mt-10 items-center gap-8">
      <h1>Search</h1>

      <SearchInput />
      <SearchResults />
    </div>
  );
}
