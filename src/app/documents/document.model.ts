export class Document {
  id: number;
  name: string;
  description: string;
  url: string;
  children: Document[];

  constructor(id: number, name: string, description: string, url: string, children: Document[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
    this.children = children;
  }
}