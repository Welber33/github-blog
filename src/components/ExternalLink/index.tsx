import { ComponentProps } from "react";
import { ExternalLinkContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
}

export function ExternalLink({ text, ...props }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...props}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare}/>
    </ExternalLinkContainer>
  )
}