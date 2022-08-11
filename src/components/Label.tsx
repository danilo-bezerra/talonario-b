import { Heading, IHeadingProps } from "native-base";

type Props = IHeadingProps & {
  children: string;
};

export function Label({ children, ...props }: Props) {
  return (
    <Heading color="gray.100" fontSize="14" mt={2} mb={1} {...props}>
      {children}
    </Heading>
  );
}
