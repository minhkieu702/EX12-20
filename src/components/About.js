import React from 'react'
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize'

const About = () => {
  return (
    <div>
      <Collapsible accordion>
  <CollapsibleItem
    expanded={true}
    header="THE TEAM"
    icon={<Icon>team</Icon>}
    node="div"
  >
    <p left>Here you can see the player card, which consist of over 50 soccer football players from all over the world.</p>
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Nations"
    icon={<Icon>place</Icon>}
    node="div"
  >
    somewhere
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Daily news"
    icon={<Icon>fire</Icon>}
    node="div"
  >
    New news
  </CollapsibleItem>
</Collapsible>
    </div>
  )
}

export default About
