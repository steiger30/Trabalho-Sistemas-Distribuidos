import { PropsTypes } from "@/shared/types/props.types";

export default function ContainerArticle({ children }: PropsTypes) {
  return (
    <article className=" max-w-4xl m-auto pb-9">
      {children}
    </article>
  )
}