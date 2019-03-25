<template >
    <div style='backgroundColor:#fdf0c8;height:100vh;padding:24px;'>
        <h2>Carbon content:</h2>
        <h1>{{msg}}</h1>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script>

import Chart from 'chart.js';


export default {
    name: 'Results',
    props: {
        msg: String
    },
    mounted() {
        this.createChart();
    },
    methods: {
        createChart(){ 
            var ctx = document.getElementById('myChart');
            ctx.style.marginTop = '24px';
            var data = {
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: ['#fdd378', '#b9a2ff', '#ff93f9'],
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ]
            };
            // And for a doughnut chart
            var myDoughnutChart = new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: {
                    animation:{
                        animateScale: true 
                    },
                    cutoutPercentage: 50,
                }
            });
        }
     }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
