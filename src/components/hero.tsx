import Image from "next/image";

interface heroProps{
    imgData: string;
    impAlt: string;
    title:string;
}

export default function hero(props: heroProps){
    return(<div className="relative h-screen">

            <div className="absolute -z-10 inset-0">
                <Image
                src={props.imgData}
                alt={props.impAlt}
                fill
                style={{objectFit: 'cover'}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900">

            </div>
            </div>
            <div className="pt-48 flex justify-center items-center">
                <h1 className="text-white text-6xl">
                    {props.title}
                </h1>
            </div>

        </div>
    )
}