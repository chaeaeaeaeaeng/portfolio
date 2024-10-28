import Image from "next/image";

export default function Home() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflowY: "scroll" }}>
            {/*표지*/}
            <Image
                src="/images/start.jpg"
                alt="cover"
                layout="fill"           // 부모 요소를 채우도록 설정
                // objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
            {/*프로필*/}
            <Image
                src="/images/profile.jpg"
                alt="profile"
                layout="fill"           // 부모 요소를 채우도록 설정
                // objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
            {/*소개*/}
            <Image
                src="/images/introduce.jpg"
                alt="introduce"
                layout="fill"           // 부모 요소를 채우도록 설정
                // objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
            {/*ability*/}
            <Image
                src="/images/abilites1.jpg"
                alt="abilites"
                layout="fill"           // 부모 요소를 채우도록 설정
                // objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
            <Image
                src="/images/abilites2.jpg"
                alt="abilites"
                layout="fill"           // 부모 요소를 채우도록 설정
                // objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
            {/*project*/}
            <Image
                src="/images/project1.jpg"
                alt="소개"
                layout="fill"           // 부모 요소를 채우도록 설정
                // objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
            <Image
                src="/images/project2.jpg"
                alt="소개"
                layout="fill"           // 부모 요소를 채우도록 설정
                // objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
            {/*overview*/}
            <Image
                src="/images/overview.jpg"
                alt="overview"
                layout="fill"           // 부모 요소를 채우도록 설정
                // objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
            <Image
                src="/images/thankyou.jpg"
                alt="finish"
                layout="fill"           // 부모 요소를 채우도록 설정
                // objectFit="cover"       // 부모 요소 비율에 맞춰 크기 조정
                quality={100}           // 이미지 품질 (옵션)
            />
        </div>
    );
}
