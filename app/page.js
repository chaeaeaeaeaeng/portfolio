import Image from "next/image";

export default function Home() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Image
                src="/images/start.jpg"
                alt="표지"
                layout="fill"           // 부모 요소를 채우도록 설정
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
            <Image
                src="/images/introduce.jpg"
                alt="소개"
                layout="fill"           // 부모 요소를 채우도록 설정
                objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
        </div>
    );
}
