import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Box = styled.div`
  background: #ffffff;
  border-radius: 8px;
`;

const MainGrid = styled.main`

`

export default function Home() {
  return (
  <MainGrid>
    <Box>
      Imagem
    </Box>
    <Box>
      Bem vindo
    </Box>
    <Box>
      Comunidade
    </Box>
  </main>
  )
}
