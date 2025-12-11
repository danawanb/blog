const args = Deno.args;

const fileName = `./posts/${args[0]}.md`;

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

let content = `---
title: ${args[0]}
publish_date: ${year}-${month}-${day}
---
${args[1]}
`;

console.log(content);

await Deno.writeTextFile(fileName, content);
