<template>
    <div>
        <div class="btn" @click='toggleDiff'>
            <template v-if="isDiff">
                关闭对比图
            </template>
            <template v-else>
                打开对比图
            </template>

        </div>

        <div class="charts">

            <bar v-if='!isDiff' v-ref:bar class='chart'></bar>
            <bar v-if='isDiff' v-ref:bar-diff  class='chart diff'></bar>
            <bar v-if='isDiff' v-ref:bar-diff-right right class='chart diff right'></bar>
        </div>
    </div>
</template>
<script>
    import Bar from '../components/bar.vue'
    import Vue from 'vue';

    export default{
        data: function () {
            return {
                isDiff: false
            }
        },
        ready: function () {
            this.setData();
        },
        beforeDestroy: function () {

        },
        components:{
            Bar
        },
        methods: {
            toggleDiff: function () {
                this.isDiff = !this.isDiff;

                this.$nextTick(function () {
                    if (this.isDiff) {
                        this.setDataDiff();
                        this.setDataDiffRight();
                    } else {
                        this.setData();
                    }
                });

            },
            setData: function () {
                var data_bar = {
                    key: ['周一', '周二', '周三', '周四', '周五'],
                    value: [10, 20, 30, 40, 50]
                };
                this.$refs.bar.$emit('set-bar-data', data_bar);
            },
            setDataDiff: function () {
                var data_bar = {
                    key: ['周一', '周二', '周三', '周四', '周五'],
                    value: [50, 40, 30, 20, 10]
                };
                this.$refs.barDiff.$emit('set-bar-data', data_bar);
            },
            setDataDiffRight: function () {
                var data_bar = {
                    key: ['周一', '周二', '周三', '周四', '周五'],
                    value: [20, 50, 30, 40, 10]
                };
                this.$refs.barDiffRight.$emit('set-bar-data', data_bar);
            }
        }
    }
</script>
<style scoped>
    .btn {
        background: #f60;
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        color: #fff;
    }

    .charts {
        width: 90%;
        height: 500px;
        margin: 0 auto;
        border: 1px solid #222;
        position: relative;
    }

    .chart {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .chart.diff {
        right: 50%;
    }

    .chart.diff.right {
        left: 50%;
        right: 0;
    }

</style>

