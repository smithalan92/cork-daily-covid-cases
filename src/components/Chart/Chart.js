import { h, computed } from 'vue';
import VueHighcharts from 'vue3-highcharts';

import './Chart.scss';

export default {
  name: 'Chart',

  components: {
    VueHighcharts,
  },

  props: {
    categories: {
      type: Array,
      required: true,
    },
    series: {
      type: Array,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const chartOptions = computed(() => ({
      chart: {
        type: 'line',
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: props.categories,
      },
      yAxis: {
        title: {
          text: 'Number of new cases',
        },
        opposite: false,
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          },
          enableMouseTracking: true,
        },
      },
      series: props.series,
    }));

    return () => h(VueHighcharts, {
      options: chartOptions,
      type: props.type,
    });
  },
};
