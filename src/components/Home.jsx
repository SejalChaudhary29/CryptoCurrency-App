import { Box, Image, Text } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import btcSrc from '../assets/btc.png'
const Home = () => {
  return (
   <>
   <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>
<motion.div style={{
  height:'80vh',
}}
animate={{
  translateY:'20px'
}}
transition={{
  duration:1,
  repeat: Infinity,
  repeatType: 'reverse',
}}>
<Image w={'full'} h={'full'} objectFit={'contain'}  src={btcSrc} filter={'grayscale(1)'}/>

<Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} mt={-20}>XCrypto</Text>
</motion.div>
   </Box>
   </>
  )
}

export default Home