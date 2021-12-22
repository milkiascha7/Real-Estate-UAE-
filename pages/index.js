import Head from 'next/head'
import Image from 'next/image'
import { Flex, Box, Text, Button } from "@chakra-ui/react"
import Link from 'next/link'
import { baseUrl, fetchApi} from '../utils/fetchApi'
import Property from '../components/Property'

export default function Home({ propertyForRent, propertyForSale }) {
  // console.log("propertyForRent" , propertyForRent)

  const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" >
      <Image src={imageUrl} width={500} height={300} alt="banner" />
    
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3xl" fontWeight="bold">{title1} <br />{title2}</Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1} <br /> {desc2}</Text>
      
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box> 
    </Flex>
  )

  return (
    <div alignItems="center" w="full">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner purpose="Rent a Home" title1="Rental Homes for" title2="Everyone" desc1="Explore Apartments, Villas, Homes" 
        desc2="and more" buttonText="Explore Renting" linkName="/search?purpose" 
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
     
      
      <Flex flexWrap="wrap" w="full" justifyContent="center" alignItems="center">
        {propertyForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      <Banner purpose="Buy A Home" title1="Find, Buy and Own your" title2="Dream Home" desc1="Explore Apartments, Villas, Homes" 
        desc2="and more" buttonText="Explore Buying" linkName="/search?purpose" 
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
       <Flex flexWrap="wrap">
        {propertyForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      
    </div>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }

  }

} 
