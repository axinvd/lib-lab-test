import { LinkItem } from "../components/linkItem/linkItem";

export const renderLinkItem = <
  T extends { _id: string } & ({ name: string } | { dialog: string }),
>(
  data: T[],
  url: string,
) => {
  return data.map((item) => {
    const text = "name" in item ? item.name : item.dialog;

    return (
      <LinkItem key={item._id} href={`${url}/${item._id}`}>
        {text}
      </LinkItem>
    );
  });
};
