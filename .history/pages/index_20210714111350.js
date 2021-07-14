import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid;

export default function Home() {
  return (
  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <Box>
        <img scr="https://github.com/frnndlima.p" />
      </Box>
    </div>
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
      <Box>
        Bem vindo
      </Box>
    </div>
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
      <Box>
        Pessoas da comunidade
      </Box>
      <Box>
        Comunidade
      </Box>
    </div>
  </MainGrid>
  )
}
