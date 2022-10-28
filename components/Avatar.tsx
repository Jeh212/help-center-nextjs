import { AvatarPicture } from "../styles/pages/components/Avatar";
import Image from 'next/future/image'


interface AvatarProps {
    src: any;
    width: number;
    height: number
}



function Avatar({ height, src, width }: AvatarProps) {


    return (
        <AvatarPicture>
            <Image src={src} width={height} height={width} alt="" />
        </AvatarPicture>
    )
}
export default Avatar