import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../Home";
import { Loading } from "../../../../components/Loading";
import { relativeDateFormatter } from "../../../../utils/formatter";

interface PostHeaderprops {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderprops) {
  const navigate = useNavigate();

  const formattedDate = relativeDateFormatter(postData?.created_at);

  function goBack() {
    navigate(-1) //voltar uma página
  }

  return (
    <PostHeaderContainer>
      {
        isLoading ? (
          <Loading />
        ) : (
          <>
            <header>
              <ExternalLink
                as="button"
                onClick={goBack}
                icon={<FontAwesomeIcon icon={faChevronLeft} />}
                text="Voltar"
                variant="iconLeft"
              />
              <ExternalLink text="Ver no Github" href={postData.html_url} target="_blank" />
            </header>

            <h1>{postData.title}</h1>

            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {postData.user?.login}
              </li>

              <li>
                <FontAwesomeIcon icon={faCalendar} />
                {formattedDate}
              </li>

              <li>
                <FontAwesomeIcon icon={faComment} />
                {postData.comments} comentários
              </li>
            </ul>
          </>
        )
      }
    </PostHeaderContainer>
  )
}