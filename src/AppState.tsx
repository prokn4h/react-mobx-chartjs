import { observable, action, computed } from "mobx";

export class AppState {
    
    selectedColor = "rgba(55, 55, 55, 0.75)";

    @observable
    history = [
        {
            x1: 3.5,
            x2: 10
        }
    ]

    @action
    addToHistory = (newX1: number, newX2: number) => {
        this.history.push({
            x1: newX1,
            x2: newX2
        })
    }

    @action
    undo = () => {
        if (this.history.length !== 1) {
            this.history.pop();
        }
    }

    annotationKey = 1;

    @computed
    get getChartOptions() {
        let key1 = "x" + this.annotationKey++;
        let key2 = "y" + this.annotationKey++;
        return {
            legend: {
                display: true
            },
            responsive: true,
            spangaps: true,
            scales: {
                xAxes: [{
                    position: 'bottom',
                    type: 'linear',
                    gridLines: {
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
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'y axis'
                    },
                    ticks: {
                        reverse: false,
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                    }
                }]
            },
            annotation: {
                events: ['click', 'onMouseup'],
                annotations: [
                    {
                        drawTime: "afterDatasetsDraw",
                        // Have to assign new id every time annotation property changes, otherwise mobx event doesn't trigger
                        id: key1,
                        type: "line",
                        mode: "vertical",
                        scaleID: "x-axis-0",
                        value: this.history[this.history.length - 1].x1,
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
                        },
                        onDrag: function (event: any) {                                      
                        },
                        onDragEnd: (event: any) => {
                            let value = event.subject.element.options.value;
                            this.addToHistory(value, this.history[this.history.length - 1].x2);
                        }
                    }, {
                        drawTime: "afterDatasetsDraw",
                        // Have to assign new id every time annotation property changes, otherwise mobx event doesn't trigger
                        id: key2,
                        type: "line",
                        mode: "vertical",
                        scaleID: "x-axis-0",
                        value: this.history[this.history.length - 1].x2,
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

                        },
                        onDrag: function (e: React.FormEvent<HTMLInputElement>) {

                        },
                        onDragEnd: (event: any) => {
                            let value = event.subject.element.options.value;
                            this.addToHistory(this.history[this.history.length - 1].x1, value);
                        }
                    }
                ]
            }
        }
    }

    @computed
    get getData() {
        return {
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            category: 'linear',
            datasets: [
                {
                    label: "Dataset 1",
                    backgroundColor: "rgba(122, 122, 122, 0.25)",
                    borderColor: "rgba(122, 122, 122, 0.75)",
                    data: [{
                        x: 0,
                        y: 1,
                    }, {
                        x: 2,
                        y: 4,
                    }, {
                        x: 3,
                        y: 2,
                    }],
                    fill: true,
                },{
                    label: "Dataset 2",
                    backgroundColor: "rgba(122, 122, 122, 0.25)",
                    borderColor: "rgba(228, 112, 112, 0.75)",
                    data: [{
                        x: 4,
                        y: 3,
                    }, {
                        x: 5,
                        y: 5,
                    }, {
                        x: 6,
                        y: 2,
                    }],
                    fill: true,
                },{
                    label: "Dataset 3",
                    backgroundColor: "rgba(122, 122, 122, 0.25)",
                    borderColor: "rgba(255, 0, 0, 0.75)",
                    data: [{
                        x: 6,
                        y: 2,
                    }, {
                        x: 7,
                        y: 3,
                    }, {
                        x: 8,
                        y: 4,
                    }, {
                        x: 9,
                        y: 2,
                    }],
                    fill: true,
                },{
                    label: "Dataset 4",
                    backgroundColor: "rgba(122, 122, 122, 0.25)",
                    borderColor: "rgba(61, 61, 255, 0.75)",
                    data: [{
                        x: 11,
                        y: 3,
                    }, {
                        x: 12,
                        y: 2,
                    }, {
                        x: 13,
                        y: 4,
                    }, {
                        x: 14,
                        y: 7,
                    }],
                    fill: true,
                },

            ]
        }
    }
}