import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileContent, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture
        src="https://avatars.githubusercontent.com/u/44277956?v=4"
      />

      <ProfileContent>
        <header>
          <h1>João Welber</h1>

          <ExternalLink text="Github" href="#" />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas.
          Eu viverra massa quam dignissim aenean malesuada suscipit.
          Nunc, volutpat pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Welber33
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Freela
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            27 seguidores
          </li>
        </ul>

      </ProfileContent>
    </ProfileContainer>
  )
}