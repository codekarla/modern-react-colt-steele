import Head from "next/head";
import Image from "next/image";
import axios from "axios";

export default function Meow(props) {
  const cats = props.data;
  console.log(cats);

  return (
    <>
      <Head>
        <title>Meow Slot Machine</title>
        <meta
          name="description"
          content="A dumb slot machine featuring meows."
        />
      </Head>
      <main>
        <h1>Meow Slot Machine</h1>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    require("dotenv").config();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CAT_APIKEY || "DEMO-API-KEY",
      },
      params: {
        format: "json",
        size: "med",
        mime_types: "jpg",
        limit: 10,
      },
    };

    const { data } = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      config
    );

    return {
      props: { data },
    };
  } catch (e) {
    console.log("Something went wrong!\n", e.message);
  }
}
