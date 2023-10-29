import { list } from "postcss";

export default class Project {
  type: string;
  title: string;
  githubLink: string;
  apkLink: string;
  siteLink: string;
  techUsed: string[];
  description: string;
  imgLink: string;

  constructor(
    type: string,
    title: string,
    githubLink: string,
    apkLink: string,
    siteLink: string,
    description: string,
    imgLink: string,
    techUsed: string[]
  ) {
    this.type = type;
    this.title = title;
    this.githubLink = githubLink;
    this.apkLink = apkLink;
    this.siteLink = siteLink;
    this.techUsed = techUsed;
    this.description = description;
    this.imgLink = imgLink;
  }
}
