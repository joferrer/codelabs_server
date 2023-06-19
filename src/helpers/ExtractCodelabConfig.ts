import * as fs from 'fs';


export const extractCodelabProps = (filePath: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const propsCodelab = data.split('#')

       // Extraer el título, contenido, tags y autor del contenido del archivo Markdown
        const title = extractTitle(propsCodelab[1]);
        const descrip = extractDescription(propsCodelab[2]);
        const content = extractContent(propsCodelab[3]);
        const author = extractAuthor(propsCodelab[4]);
        const tags = extractTags(propsCodelab[5]);
        
      resolve({
        title,descrip,content,author,tags
      });
    });
  });
};



const extractTitle=(content: string): string =>{
    const p = content.split(":")
    return p[1].trimStart().replace(/\n/g, '')
  }
  const extractDescription=(content: string): string =>{
    const p = content.split(":")
    return p[1].trimStart().replace(/\n/g, '')
  }
  const extractContent=(content: string): string[] =>{
    const p = content.split(":")[1]
    const contentList:string[] = p.split("-").slice(1).map(c => c.trimStart())
    return contentList.map(c => c.replace(/\n/g, ''))
  }
  
  const extractTags=(content: string): string[] =>{
    const p = content.split(":")[1]
    const contentList:string[] = p.split(",").map(c => c.trimStart())
    return contentList.map(c => c.replace(/\n/g, ''))
  }
  
  const extractAuthor=(content: string): string =>{
    const p = content.split(":")
    return p[1].trimStart().replace(/\n/g, '')
  }

