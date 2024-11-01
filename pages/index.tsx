import { NextPage } from "next";
import HomePage from "./home";


const Home: NextPage = () => {

  return (
    <>
      <HomePage />
    </>
  );
}
export default Home;

export const getServerSideProps = () => {
  return {
    redirect: {
      permanent: false,
      destination: `/home`,
    },
  }
}
