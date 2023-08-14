import { FC } from "react";
import capitalizeFirstLetter from "@utils/capitalize";

interface pageProps {
  params: { name: string[] };
}

export async function generateMetadata({ params }: pageProps) {
  return {
    title: params.name ? capitalizeFirstLetter(params.name[0]) : "No name",
  };
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <div>
      Other name:{" "}
      {params.name
        ? params.name.map((name) => capitalizeFirstLetter(name))
        : "No name in the url"}
    </div>
  );
};

export default page;
