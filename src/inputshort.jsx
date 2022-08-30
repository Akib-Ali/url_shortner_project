import { Input,Stack,InputGroup,InputLeftAddon ,InputRightAddon,Button, ButtonGroup  } from '@chakra-ui/react'
import { useState } from 'react'


export const InputShort=({Setinputvalue})=>{
 const [value,setValue]= useState("");

 const handleClick=()=>{
    Setinputvalue(value);
    setValue("")
 }
    return(
        <div className="inputContainer">
            <h1>URL <span>Shortener</span></h1>
            <p>Link shorteners work by transforming any <br></br>long URL into a shorter, more readable link.<br></br> When a user clicks the shortened version, they’re <br></br> automatically forwarded to the destination URL. <br></br>  created by
            <span>  <a href='https://www.linkedin.com/in/akib-ali-1695081b8/' target="_blank"> Akib Ali</a></span></p>
            
            <div>
                

                <Stack spacing={4}>
     

  {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
  <InputGroup size='lg'>
    <InputLeftAddon children='https://' />
    <Input placeholder='mysite'  type="text" value={value} onChange={e=> setValue(e.target.value)}/>
    {/* <InputRightAddon children='.com' /> */}

    <Button colorScheme='orange' onClick={handleClick}> Shortener</Button>

  </InputGroup>
   

</Stack>
            
            </div>
        </div>
    )
}