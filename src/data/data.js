import Iphone from '../assets/smartphones/iphone.png'
import SmartWatch from '../assets/smartwatch/smart_watch.png'
import Controller from '../assets/gadgets/controller.png'

import Phone from '../assets/smartphones/01.png'
import Speaker from '../assets/tvandaudio/03 1.png'
import Headphones from '../assets/tvandaudio/04 1.png'
import Cable from '../assets/smartphones/3 2.png'
import AirPort from '../assets/smartphones/airport.png'
//import { IoBagHandle } from 'react-icons/io5'

export const slideList = [
    {
        id: 1,
        title: "NEW PHONE RELEASE THIS FALL",
        image: Iphone,
        button: "Find out more",
    },
    {
        id: 2,
        title: "RELEASE IN 31 DECEMBER",
        image: SmartWatch,
        button: "Find out more"
    },
    {
        id: 3,
        title: "PLAYBOX CONSOLE X245-HD",
        image: Controller,
        button: "Find out more"
    }
]


export const featureProduct = [
    {
        id: 1,
        name: "Smartphones",
        title: "Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1'",
        price: "$ 1200.00",
        image: Phone,
        // icons: <IoBagHandle />
    },
    {
        id: 2,
        name: "Tv & Audio",
        title: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
        price: "$ 800.00",
        image: Speaker,
        // icons: <IoBagHandle />
    },
    {
        id: 3,
        name: "Tv & Audio",
        title: "Headphones, Noise cancelling, Bluetooth 5.0",
        price: "$ 100.00",
        image: Headphones,
        // icons: <IoBagHandle />
    },
    {
        id: 4,
        name: "Smartphones",
        title: "Data Cable, Mcdodo CA-7430 Nest Series Full Compatible",
        price: "$ 10.00",
        image: Cable,
    },
    {
        id: 5,
        name: "Smartphones",
        title: "Headphones, True Wireless Xiaomi Redmi Buds 3 Lite",
        price: "$20.00",
        image: AirPort,
    }
]