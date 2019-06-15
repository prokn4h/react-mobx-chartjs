import { observable, action, decorate, computed } from "mobx";

export class AppState {
    colors = [
        "rgba(255, 255, 0, 0.75)",
        "rgba(0, 0, 0, 255.75)",
        "rgba(255, 255, 55, 0.75)"
    ];

    selectedColor = "rgba(255, 255, 0, 0.75)";

    selectColor(color: string) {
        //debugger;
        this.selectedColor = color;
    }

    data = {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
            {
                label: "Dataset 1",
                backgroundColor: this.selectedColor,
                data: [5, 4, 3, 10, 35, 2, 50]
            },
            {
                label: "Dataset 2",
                backgroundColor: "rgba(255, 0, 0, 0.75)",
                data: [2, 5, 5, 16, 2, 30, 5]
            }
        ]
    };

    get getData() {
        //return this.data;
        debugger;
        return {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
                {
                    label: "Dataset 1",
                    backgroundColor: this.selectedColor,
                    data: [5, 4, 3, 10, 35, 2, 50]
                },
                {
                    label: "Dataset 2",
                    backgroundColor: "rgba(255, 0, 0, 0.75)",
                    data: [2, 5, 5, 16, 2, 30, 5]
                }
            ]
        }
    }
}

decorate(AppState, {
    colors: observable,
    selectedColor: observable,
    data: observable,
    selectColor: action,
    getData: computed
});