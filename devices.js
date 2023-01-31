import { dbConnect } from "./dbConnect.js"


const db = dbConnect()
const devices = db.collection('devices')

export async function addNewDevice(req, res) {
    const newDevice = req.body
    await devices.insertOne
        (newDevice)
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send({ message: 'New Device has been added.' })

}

export async function getAllDevices(req, res) {
    const collection = await devices.find().toArray()
    res.send(collection)
}
export async function toggleSwitch(req, res) {
    // fetch('http://23.115.145.128/rpc/Switch.Toggle?id=0')
    fetch('http://http://192.168.15.35/rpc/Switch.GetStatus?id=0/rpc/Switch.Toggle?id=0')
}
export async function getDeviceData() {
    // const data = await fetch('http://192.168.15.35/rpc/Switch.GetStatus?id=0')
    // const data = await fetch('http://23.115.145.128.GetStatus?id=0')
    const data = await fetch('http://http://192.168.15.35/rpc/Switch.GetStatus?id=0f.GetStatus?id=0')
    return data
}