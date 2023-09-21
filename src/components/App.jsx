import Container from "./App/App.styled";
import Section from "./Section";
import Phonebook from "./Phonebook";
import Contacts from "./Contacts";
import Filter from "./Filter";

export const App = () => {

  return (
    <Container>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </Container>
  );
};
