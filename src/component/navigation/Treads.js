import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import { ContainerTreads, Paragraph } from "../styled";

const ParagraphTreads = styled(Paragraph)`
  margin-left: 0.857em;
`

const Treads = () => {
  return (
    <ContainerTreads>
      <Icon id='balloon' />
      <ParagraphTreads>
        All treads
      </ParagraphTreads>
    </ContainerTreads>
  )
}

export default Treads;
