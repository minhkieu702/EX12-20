import React from 'react'
import { Collapsible, CollapsibleItem, Container, Icon, Section } from 'react-materialize'
export default function About() {
  return (
    <Container>
        <Section>
        <Collapsible accordion>
  <CollapsibleItem
    expanded
    header="THE TEAM"
    icon={<Icon>group</Icon>}
    node="div"
  >
    Here you can see the player card, which consists of over 50 soccer football players from all over the world. 
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Nations"
    icon={<Icon>place</Icon>}
    node="div"
  >
    England, France, Spain, Germany,...
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Daily news"
    icon={<Icon>whatshot</Icon>}
    node="div"
  >
    This site displays all the day's stories, sorted by most recent. You can access older news stories via the calendar.
  </CollapsibleItem>
</Collapsible>
</Section>
    </Container>
  )
}
