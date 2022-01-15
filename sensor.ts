import sensor from 'node-dht-sensor';



interface ProbeData {
    type: string;
    temp: number,
    hum: number
}

export const readProbe = () => {

    const probeData: ProbeData = {type:"probedata", temp: 0, hum: 0};
    
        sensor.read(11, 17, (err:NodeJS.ErrnoException | null,temperature: number, humidity: number) => {
            if(!err) {
                probeData.temp = temperature;
                probeData.hum = humidity;
            } else {
                console.log(err);
            }
        })

    return probeData;
}

setInterval(() => {console.log(readProbe())}, 5000);



