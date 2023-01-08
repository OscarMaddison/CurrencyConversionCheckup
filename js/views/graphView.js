//import { Line } from "react-chartjs-2";

function GraphView(props){ //console.log(props);
    //<head>test graph</head>
	return (
        Graph = () => {
            return (
                <div className="Graph">
                    <Line
                        datasetIDKey="testIDKey"
                        data={{
                            labels: ["test1", "test2", "test3"],
                            datasets: [
                                {
                                    label: "line1",
                                    data: [14, 21, 28]
                                },
                                {
                                    label: "line2",
                                    data: [17, 11, 7]
                                },
                                {
                                    label: "line3",
                                    data: [10, 25, 15]
                                }
                            ]
                        }}
                    />
                </div>
            )
        }
    )
}