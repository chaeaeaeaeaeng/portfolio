import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Image
                src="/images/frame.svg"
                alt="cover"
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
                width={842}
                height={595}
                className="w-full mb-3"
            />
            <Image
                src="/images/profile.svg"
                alt="cover"
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
                width={842}
                height={595}
                className="w-full mb-3"
            />
            <Image
                src="/images/introduce.svg"
                alt="cover"
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
                width={842}
                height={595}
                className="w-full mb-3"
            />
            <Image
                src="/images/abilities1.svg"
                alt="cover"
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
                width={842}
                height={595}
                className="w-full mb-3"
            />
            <Image
                src="/images/abilities2.svg"
                alt="cover"
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
                width={842}
                height={595}
                className="w-full mb-3"
            />
            <Image
                src="/images/project1.svg"
                alt="cover"
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
                width={842}
                height={595}
                className="w-full mb-3"
            />
            <Image
                src="/images/project2.svg"
                alt="cover"
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
                width={842}
                height={595}
                className="w-full mb-3"
            />
            <Image
                src="/images/overview.svg"
                alt="cover"
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
                width={842}
                height={595}
                className="w-full mb-3"
            />
            <Image
                src="/images/thankyou.svg"
                alt="cover"
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
                width={842}
                height={595}
                className="w-full mb-3"
            />

        </div>
    );
}
