---
to: src/<%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.tsx
# Lint only the generated file
sh: yarn lint:fix <%= h.getBasePath() %><%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.tsx
---
import React from 'react'

export interface <%=name%>Props {
  name: string;
  children?: React.ReactNode;
}

export const <%= name %> = ({ name, children }: <%=name%>Props): JSX.Element => {
    return (
        <h1>Hello {name} from Thing</h1>
  )
}
