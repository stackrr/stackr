import React, {useState, useEffect} from "react";
import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, 
} from 'chart.js/auto';
import styles from "./NpmGraph.module.css"

const frequency = 7;
function NpmGraph({packageNames, setNpmStats, npmStats}) {
    // const [npmStats, setNpmStats] = useState({});
    // const fetchData = () => {
    //     //Join all package packageNames with a ','
    //     console.log(packageNames)
    //     let packageNameString = packageNames.join(',');
    //     console.log(packageNameString)
    //     //Fetch npm download data over a year range for all package
    //     fetch(`https://api.npmjs.org/downloads/range/last-year/${packageNameString}`)
    //     .then(res=>res.json())
    //     .then(downloadData => {
    //         setNpmStats(downloadData);
    //     })
    //     .catch(err => console.log({err}))
    // }

    const fetchData = ()=> {
        //Join all package packageNames with a ','
        // console.log("These are the packageNames: ", packageNames);
        let packageNameString = packageNames.join(',');
        console.log("This is the packageNameString: ", packageNameString);
        //Fetch npm download data over a year range for all package
        fetch(`https://api.npmjs.org/downloads/range/last-year/${packageNameString}`)
        .then(res=>res.json())
        .then(downloadData => {
            for (let fw in downloadData) {
                // downloadData[fw].downloads = downloadData[fw].downloads.filter((_,i) => i%10==0);
                let total = 0;
                const {downloads} = downloadData[fw];
                const averageDownload = [];
                for (let i = 0; i < downloads.length; i++){
                    if ((i+1)%frequency){
                        total+=downloads[i].downloads;
                    }
                    else{
                        averageDownload.push({
                            day: downloads[i].day, 
                            downloads: Math.round(total/frequency*100)/100
                        });
                        total = 0;
                    }
                }
                console.log({averageDownload})
                downloadData[fw].downloads = averageDownload;
            }
            setNpmStats(downloadData);
            console.log("This is the downloadData: ", downloadData)
        })
        .catch(err => console.log({err}))
     };

     useEffect(()=> {
        console.log("This is the npmStats: ",npmStats)
    },[npmStats])


    // const testData = [
    //     {downloads: 12, day:0},
    //     {downloads: 20, day:1},
    //     {downloads: 100, day:2},
    //     {downloads: 2, day:3},
    //     {downloads: 50, day:4},
    // ]
    
    const lineColors = ['blue', 'red', 'green', 'purple', 'orange', 'pink', 'cyan', 'yellow'];
    // fill ds with datasets objects
    // each line(framework) has to have its own dataset object with label, data, borderColor, and backgroundColor
    const ds = [];
    let data = {};
    // then set datasets within data to ds
    if (Object.keys(npmStats).length) {
        for (let i = 0; i < packageNames.length; i++) {
            ds.push(
                {
                    label: packageNames[i],
                    data: npmStats[packageNames[i]].downloads.map(({downloads})=>downloads),
                    borderColor: lineColors[i],
                    backgroundColor: lineColors[i],
                }
            )
        }
        
        data = {
            labels: npmStats[packageNames[0]].downloads.map(({day})=>day), // X-axis columns
            datasets: ds
        }
    }



    if (!Object.keys(npmStats).length) return (
        <button onClick={()=> fetchData()}>Create Graph</button>
        // <div>Waiting for data to fetch</div>
    )

    if (Object.keys(npmStats).length) {
        return(
            // <div className={styles.graphContainer}>
            <div className="flex justify-center w-3/5 bg-gray-50 opacity-85 rounded-xl my-8 ">
                <Line
                 data={data}
                //  options={{
                //     responsive: false
                //  }}
                 />
            </div>
        );
    }
};

export default NpmGraph