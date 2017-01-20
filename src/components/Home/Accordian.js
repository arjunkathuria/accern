import React from 'react';
import { Accordion, Icon, Segment} from 'semantic-ui-react';


export default function AccordionComp(props) {
  let panels = props.panels ;
  return (
    <Segment inverted>
      <Accordion panels={panels} inverted exclusive={false}/>
    </Segment>
  );
}