export { default } from "../compositions/home/Home";

import { GetStaticProps, GetStaticPropsContext } from "next";

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {},
    revalidate: 3600,
  };
};
