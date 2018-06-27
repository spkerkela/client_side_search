import Vue from "vue";
import Search from "./search";
fetch("data.json")
  .then(response => response.json())
  .then(documents => {
    const search = new Search(documents);
    const app = new Vue({
      el: "#app",
      data: {
        documents: documents,
        searchtext: ""
      },
      methods: {
        search: function() {
          this.documents = search.search(this.searchtext);
        }
      }
    });
  });
