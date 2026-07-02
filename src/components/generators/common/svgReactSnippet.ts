export const generateSvgReactSnippet = (componentName: string, svg: string) =>
  `const ${componentName} = () => (
  <div dangerouslySetInnerHTML={{ __html: \`${svg}\` }} />
);`;
