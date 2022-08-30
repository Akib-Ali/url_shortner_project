import { Input ,Button} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from "axios";
import { Skeleton, SkeletonCircle, SkeletonText ,Stack,Text} from '@chakra-ui/react'


export const LinkResult=({inputvalue})=>{

 const [shorternLink,setShortenLink] = useState("");
 const [copied, setCopied] = useState(false);
 const [loading,setLoading] = useState(false);
 const [err,seterr] = useState(false)


 const fetchData=async()=>{
  try {
    setLoading(true);
    const res =await axios(`https://api.shrtco.de/v2/shorten?url=${inputvalue}`)
    setShortenLink(res.data.result.full_short_link)

  } catch (error) {
    seterr(true)
    
  }finally{

    setLoading(false)
  }
 }

 


 useEffect(()=>{
  if(inputvalue.length){
    fetchData()

  }
 },[inputvalue])

 
 
 useEffect(()=>{
  const timer = setTimeout(()=>{
    setCopied(false)
  },1000);

  return ()=>clearTimeout(timer)
 },[copied])


 if(loading){
  return  <h1 className='loading'>...Loading</h1>

 }if(err){
  return <p>error</p>

 }

    return(
      <>
        {shorternLink && (

          <div className='result'>
       {/* <Input
    isInvalid
    errorBorderColor='red.300'
    placeholder='Result'

  /> */}
   {/* <p>{shorternLink}</p>  */}
   <Text fontSize='25px' color='tomato'>
  {shorternLink}
</Text>

  <CopyToClipboard text={shorternLink}
          onCopy={() => setCopied(true)}>
          <Button colorScheme='orange' size="md" fontSize="sm" className={copied ? "copied": " "}>Copy Clipboard</Button>

        
        </CopyToClipboard>



        </div>


        )}
      </>
       
    )
}