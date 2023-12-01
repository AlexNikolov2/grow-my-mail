import Image from "next/image"
import brand1 from '../../../public/brands/BN healthy.jpg'
import brand2 from '../../../public/brands/BN healthy.jpg'
import brand3 from '../../../public/brands/BN healthy.jpg'
import brand4 from '../../../public/brands/BN healthy.jpg'
import brand5 from '../../../public/brands/BN healthy.jpg'

export default function Slider() {
    return (
        <section className="brands-img flex gap-14 overflow-x-scroll">
            <Image src={brand1} alt=""></Image>
            <Image src={brand1} alt=""></Image>
            <Image src={brand1} alt=""></Image>
            <Image src={brand1} alt=""></Image>
            <Image src={brand1} alt=""></Image>
        </section>
    )
}