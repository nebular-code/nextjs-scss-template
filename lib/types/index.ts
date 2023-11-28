export class BreadcrumbData {
  public label: string = "";
  public url: string = "";
  public isActive: boolean = false;

  constructor(label: string, url: string, isActive: boolean = false) {
    this.label = label;
    this.url = url;
    this.isActive = isActive;
  }
}
