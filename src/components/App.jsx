import { useEffect } from "react";

import Container from "./App/App.styled";
import Section from "./Section";
import Phonebook from "./Phonebook";
import Contacts from "./Contacts";
import Filter from "./Filter";
import { Widgets } from "./Widgets/Widgets";

import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/API";


export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Container>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>

      <Widgets />
    </Container>
  );
};
