import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loader from "../components/Loader";

import { Container, HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import ErrorComponent from "./ErrorComponent";
const Exchanges = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchange(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, []);
  if (error) return <ErrorComponent message= {'Error While Fetching Coins...'}/>
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchange.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};
const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image src={img} w={10} h={10} objectFit={"contain"} alt={"exchanges"} />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text  noOfLines={1}> {name}</Text>
    </VStack>
  </a>
);

export default Exchanges;
