

const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;

  }
`;

export default MainGrid;