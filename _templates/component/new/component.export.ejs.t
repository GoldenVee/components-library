---
# Export the component from the library's entry-point
inject: true
to: <%= h.getBasePath() %>index.ts
append: true
---
export * from './<%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>';
