import { Alert, AlertIcon } from '@chakra-ui/react'


const ErrorComponent = ({message}) => {
  return (
<>
<Alert status='error' pos={'fixed'} bottom={4} left={'20%'} transform={'translateX(-50%'} w={'container.lg'}>
<AlertIcon/>
{message}


</Alert>
</>
  )
}

export default ErrorComponent