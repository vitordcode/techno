export default {
  data() {
    return {
      loading: true,
      api: null,
    };
  },

  methods: {
    fetchData(url) {
      this.loading = true
      this.api = null
      fetch(`http://localhost:3000${url}`)
        .then((response) => response.json())
        .then((response) => {
          setTimeout(() => {
            this.api = response;
            this.loading = false
          }, 1000)
        });
    },
  },
};