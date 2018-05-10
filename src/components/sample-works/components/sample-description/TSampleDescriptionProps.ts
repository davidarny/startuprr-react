import { ISampleItemProps } from "@components/sample-works/components";

type TPickedProps = "title" | "subtitle" | "likesCount";
export type TSampleDescriptionProps = Pick<ISampleItemProps, TPickedProps>;
