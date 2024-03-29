import { useCallback, useEffect, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/searchInput";
import { PostsListContainer } from "./styles";
import { api } from "../../lib/axios";
import { Loading } from "../../components/Loading";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  number: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`);

      setPosts(response.data.items);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts()
  }, [getPosts]);

  return (
    <>
      <Profile />
      <SearchInput postsQuantity={posts.length} getPosts={getPosts} />

      {
        isLoading ? (
          <Loading />
        ) : (
          <PostsListContainer>
            {posts.map((post) => (
              <Post
                key={post.number}
                post={post}
              />
            ))}
          </PostsListContainer>
        )
      }
    </>
  )
}