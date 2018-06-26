import Vue from "vue";
import lunr from "lunr";
const documents = [
  {
    name: "Lunr",
    text: "Like Solr, but much smaller, and not as bright.",
    site: "https://lunrjs.com"
  },
  {
    name: "react",
    text: "a javascript library for building user interfaces.",
    site: "https://reactjs.org"
  },
  {
    name: "Lodash",
    text:
      "A modern JavaScript utility library delivering modularity, performance & extras.",
    site: "https://lodash.com"
  },
  {
    name: "go",
    text: "A simple compiled language developed by Google",

    site: "https://golang.com"
  },
  {
    name: "c++",
    text: "A popular system level programming language.",
    site: "https://cpp.com"
  },
  {
    name: "spkerkela",
    text: "The blog of Simo-Pekka Kerkelä",
    site: "https://spkerkela.com"
  }
];

const idx = lunr(function() {
  this.ref("name");
  this.field("text");
  documents.forEach(function(doc) {
    this.add(doc);
  }, this);
});

const app = new Vue({
  el: "#app",
  data: {
    documents: documents,
    searchtext: ""
  },
  methods: {
    search: function() {
      const found = idx.search(this.searchtext);
      this.documents = found.map(function(v) {
        return documents.find(function(n) {
          return n.name === v.ref;
        });
      });
    }
  }
});
