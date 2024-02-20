import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileContent, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Loading } from "../../../../components/Loading";

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileDataProps {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileDataProps>({} as ProfileDataProps)
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(`/users/${username}`);

      setProfileData(response.data)
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProfileData();
  }, [getProfileData]);

  return (
    <ProfileContainer>
      {
        isLoading ? (
          <Loading />
        ) : (
          <>
            <ProfilePicture
              src={profileData.avatar_url}
            />

            <ProfileContent>
              <header>
                <h1>{profileData.name}</h1>

                <ExternalLink text="Github" href={profileData.html_url} />
              </header>

              <p>
                {profileData.bio}
              </p>

              <ul>
                <li>
                  <FontAwesomeIcon icon={faGithub} />
                  {profileData.login}
                </li>

                {
                  profileData?.company ? (
                    <li>
                      <FontAwesomeIcon icon={faBuilding} />
                      {profileData.company}
                    </li>
                  ) : null
                }

                <li>
                  <FontAwesomeIcon icon={faUserGroup} />
                  {profileData.followers}
                </li>
              </ul>

            </ProfileContent>
          </>
        )
      }
    </ProfileContainer>
  )
}