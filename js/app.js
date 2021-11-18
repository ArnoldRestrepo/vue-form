const API_URL = "https://rickandmortyapi.com/api/";

const app = new Vue({
  el: '#app',
  data: {
    name: '',
    age: '',
    barcode: '',
    search: '',
    message: "Bar Code App",
    barcodeList: ["1234", "5678", "9012", "3456", "7890"],
    persons: [],
    episodes: [],
    episodeSelected: "",
  },
  mounted: function () {
    axios.get(API_URL + "character/1,4,5,78,124")
      .then(response => {
        this.persons = response.data;
      }).catch(error => {
        console.log(error);
      });
    axios.get(API_URL + "episode")
      .then(response => {
        this.episodes = response.data.results;
      }).catch(error => {
        console.log(error);
      });
  },
  methods: {
    onChangeBarcode: function (event) { 
      console.log(event.target.value)
    },
    searchBarcode: function () { 
      console.log(this.barcode)
      this.barcodeList.push(...this.barcode)
      console.log(validateBarcode)
      this.barcode = ''
    },
    handleSubmit: function () { 
      console.log("Data", this.name, this.age, this.barcode);
    }
  },
  computed: {
    filterEpisodes: function () { 
      return this.episodes.filter(episode => {
        return episode.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
});
