import { useForm } from "react-hook-form";
import { SearchInputContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = zod.object({
  query: zod.string()
});

type SearchFormInput = zod.infer<typeof searchFormSchema>;

interface SearchInputProps {
  postsQuantity: number;
  getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ postsQuantity, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handlePostsSearch(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handlePostsSearch)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsQuantity} publicações</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")}
      />
    </SearchInputContainer>
  )
}