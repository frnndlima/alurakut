import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';

function 

export default function Home() {
  const githubUser = 'frnndlima';

  return (
  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      
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