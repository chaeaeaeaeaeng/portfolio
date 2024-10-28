import Image from "next/image";

export default function Home() {
  return (
      <div style={{position: "relative", width: "100%", height: "100vh"}}>
          <Image
              src="/images/start.jpg"
              alt="표지"
              quality={100}           // 이미지 품질 (옵션)
          />
      </div>
  );
}
