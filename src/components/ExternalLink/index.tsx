import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft";
  as?: keyof JSX.IntrinsicElements;
}

export function ExternalLink({ text, icon, as: Component = 'a', ...props }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer as={Component} {...props}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  )
}