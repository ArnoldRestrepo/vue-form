const API_URL = "https://rickandmortyapi.com/api/";

const app = new Vue({
  el: '#app',
  data: {
    loading: true,
    name: '',
    age: '',
    barcode: '',
    search: '',
    message: "Bar Code App",
    barcodeList: [],
    barcodeSelected: "",
    episodes: [],
    episodeSelected: "",
  },
  mounted: function () {
    axios.get(API_URL + "episode")
      .then(response => {
        this.loading = false;
        this.episodes = response.data.results;
      }).catch(error => {
        console.log(error);
      });
  },
  methods: {
    onChangeBarcode: function (event) { 
      console.log(event.target.value)
    },
    addBarcode: function () { 
      this.barcodeList.push(this.barcode)
      this.barcode = ''
    },
    selectCode: function (code) {
      this.barcodeSelected = code
    },
    removeCode: function (index) {
      this.barcodeList.splice(index, 1)
    },
    handleSubmit: function () { 
      console.log("Data", this.name, this.age,this.barcodeSelected);
      alert(`${this.name}, ${this.barcodeSelected}, ${this.age}, ${this.barcode}`);
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
