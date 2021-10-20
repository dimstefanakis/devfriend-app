import Head from 'next/head'
import Image from 'next/image'
import { GraphQLClient, gql } from "graphql-request";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query'
import { Container, Box, Grid, Flex, GridItem } from "@chakra-ui/react"
import Snippet from '../components/features/Snippet'
import { SnippetNodeInterface } from '../components/features/Snippet/types';
import { useGetSnippets } from '../components/features/Snippet/queries/useGetSnippets';
import styles from '../styles/Home.module.css'

export default function Home() {
  const queryClient = useQueryClient();

  const snippets = useGetSnippets();

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="100%" h="100%">
        <Flex flexFlow="row" justifyContent="center" className={styles.main}>
          <Flex align="flex-end" flexFlow="column" w="100%">
            {snippets?.data?.map((snippet: SnippetNodeInterface)=>{
              return <Snippet key={snippet.node.id} snippet={snippet.node}/>
            })}
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}
