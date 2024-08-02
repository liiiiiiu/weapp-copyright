// components/Copyright/Copyright.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  properties: {
    prefix: {
      type: String,
      value: 'Copyright'
    },
    name: {
      type: String,
      value: ''
    },
    startYear: {
      type: Number,
      value: null
    },
    endYear: {
      type: Number,
      value: null
    },
    useCustomContent: {
      type: Boolean,
      value: false
    },
    customStyle: {
      type: String,
      value: ''
    }
  },

  data: {
    _startYear: null
  },

  lifetimes: {
    attached() {
      const nowYear = new Date().getFullYear()

      this.setData({
        _startYear: this.properties.startYear ? this.properties.startYear : nowYear
      })
    }
  },

  methods: {

  }
})