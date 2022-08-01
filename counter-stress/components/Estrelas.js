import {useState} from 'react'
import {Rating, Box} from '@mui/material';
import {Star} from '@mui/icons-material';

const labels: {[index: string]: string} = {
  1: 'Pouco Confiavel',
  2: 'Confiavel',
  3: 'Bem Confiavel',
  4: 'Muito Confiavel'
}

export default function Estrelas(){
  const [valor, setValor] = useState<number | null>(2)
  const [houver, setHouver] = useState(-1)

  return(
    <Box sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center'
      }}
    >

      <Rating
        name = "hover-feedback"
        valor = {valor}
        precision = {1}
        onChange = {(event, newValor) => {setValor(newValor)}}
        onChangeActive = {(event, newHouver) => {setHouver(newHouver)}}
        emptyIcon={<Star style={{opacity: 0.5}} fontSize ={inherit}/>}
      />      
    </Box>
    
  )
}