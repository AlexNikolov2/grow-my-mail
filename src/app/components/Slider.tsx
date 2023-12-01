import Image from "next/image"
import brand1 from '../../../public/brands/BN healthy.jpg'
import brand2 from '../../../public/brands/artofliving_logo.png'
import brand3 from '../../../public/brands/Dog_could_SVG_Logo_256x192.svg'
import brand4 from '../../../public/brands/New-Logo_KIWI_4kpix_600x.webp'
import brand5 from '../../../public/brands/Sensic.png'
import brand6 from '../../../public/brands/GROKEPET_STACKED_LOGO_RGB_1-min.png'
import brand7 from '../../../public/brands/My Way Up.webp'
import brand8 from '../../../public/brands/WOW-tea.jpg'
import brand9 from '../../../public/brands/Muscle-Republic-Logo.png'
import brand10 from '../../../public/brands/Superfeast-logo.jpg'

export default function Slider() {
    return (
        <section className="brands-img flex gap-14 overflow-x-scroll items-center">
            <Image src={brand1} alt="" className="max-h-40"></Image>
            <Image src={brand2} alt="" className="max-h-40"></Image>
            <Image src={brand3} alt="" className="max-h-40"></Image>
            <Image src={brand4} alt="" className="max-h-40"></Image>
            <Image src={brand5} alt="" className="max-h-40"></Image>
            <Image src={brand6} alt="" className="max-h-40"></Image>
            <Image src={brand7} alt="" className="max-h-40"></Image>
            <Image src={brand8} alt="" className="max-h-40"></Image>
            <Image src={brand9} alt="" className="max-h-40"></Image>
            <Image src={brand10} alt="" className="max-h-40"></Image>
        </section>
    )
}