---
to: src/<%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.styles.tsx
# Lint only the generated file
sh: yarn lint:fix <%= h.getBasePath() %><%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.styles.tsx
---

import styled from 'styled-components';
import tw from 'twin.macro';
