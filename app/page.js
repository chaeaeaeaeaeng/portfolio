import Image from "next/image";

export default function Home() {
  return (
      <div style={{position: "relative", width: "100%", height: "100vh"}}>
          <Image
              src="/images/start.jpg"
              alt="표지"
              layout="fill"           // 이미지가 부모 요소를 채우도록 설정
              objectFit="cover"       // 이미지가 부모 요소에 맞게 크기 조정
              quality={100}           // 이미지 품질 (옵션)
          />
      </div>
  );
}
