import lunr from "lunr";
export default class Search {
  constructor(documents) {
    this.documents = documents;
    this.index = lunr(function() {
      this.ref("name");
      this.field("text");
      this.field("name");
      documents.forEach(function(doc) {
        this.add(doc);
      }, this);
    });
  }

  search(word) {
    const found = this.index.search(word);
    return found.map(v => this.documents.find(n => n.name === v.ref));
  }
}
