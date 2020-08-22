import { Resource } from "../../models/resource";

export const buildResource = ({
  date = 'irrelevant date',
  external = false,
  image = 'irrelevant url',
  link = 'irrelevant link',
  title = 'irrelevant title',
}: Partial<Resource>): Resource => ({
  link,
  date,
  external,
  image,
  title,
});
