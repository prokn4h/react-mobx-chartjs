import { observable, action, decorate, computed } from "mobx";

export class AppState {
    colors = [
        "rgba(55, 55, 55, 0.75)",
        "rgba(155, 155, 0, 0.75)",
        "rgba(0, 66, 55, 0.75)"
    ];

    selectedColor = "rgba(55, 55, 55, 0.75)";

    randomScalingFactor = function () {
        return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    };


    selectColor(color: string) {
        //debugger;
        this.selectedColor = color;
    }

    get getChartOptions() {
        return {
            responsive: true,
            spangaps: true,
            scales: {
                xAxes: [{
                    position: 'bottom',
                    type: 'linear',
                    gridLines: {
                        //zeroLineColor: "rgba(0,255,0,1)"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'x axis'
                    },
                    ticks: {
                        maxRotation: 0,
                        reverse: false
                    }
                }],
                yAxes: [{
                    position: 'left',
                    gridLines: {
                        //zeroLineColor: "rgba(0,255,0,1)"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'y axis'
                    },
                    ticks: {
                        reverse: false
                    }
                }]
            },
            annotation: {
                events: ['click', 'onMouseup'],
                annotations: [
                    {
                        drawTime: "afterDatasetsDraw",
                        id: "hline",
                        type: "line",
                        mode: "vertical",
                        scaleID: "x-axis-0",
                        value: 3,
                        borderColor: this.selectedColor,
                        borderWidth: 5,
                        draggable: true,
                        label: {
                            backgroundColor: this.selectedColor,
                            content: "Selector 1",
                            enabled: true,
                            position: 'bottom'
                        },
                        onClick: function (e: React.FormEvent<HTMLInputElement>) {
                            //console.log("Annotation", e.type, this);
                        },
                        onDrag: function (event: any) {
                            //console.log(event);                                            
                        },
                        onDragEnd: function (event: any) {

                        }
                    }, {
                        drawTime: "afterDatasetsDraw",
                        id: "hline2",
                        type: "line",
                        mode: "vertical",
                        scaleID: "x-axis-0",
                        value: 6,
                        borderColor: this.selectedColor,
                        borderWidth: 5,
                        draggable: true,
                        label: {
                            backgroundColor: this.selectedColor,
                            content: "Selector 2",
                            enabled: true,
                            position: 'bottom'
                        },
                        onClick: function (e: React.FormEvent<HTMLInputElement>) {
                            //console.log("Annotation", e.type, this);
                        },
                        onDrag: function (e: React.FormEvent<HTMLInputElement>) {
                            //console.log(e.subject.config.value);
                        },
                        onDragEnd: function (event: any) {

                        }
                    }
                ]
            }
        }
    }

    get getData() {
        return {
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            category: 'linear',
            datasets: [
                {
                    label: "Dataset 1",
                    backgroundColor: this.selectedColor,
                    borderColor: this.selectedColor,
                    data: [{
                        x: 0,
                        y: 2,
                    }, {
                        x: 2,
                        y: 4,
                    }, {
                        x: 4,
                        y: 3,
                    }, {
                        x: 7,
                        y: 3,
                    }, {
                        x: null,
                        y: null,
                    }, {
                        x: 9,
                        y: 3,
                    }, {
                        x: 10,
                        y: 3,
                    }],
                    fill: true,
                }
            ]
        }
    }
}

decorate(AppState, {
    colors: observable,
    selectedColor: observable,
    selectColor: action,
    getData: computed,
    getChartOptions: computed
});