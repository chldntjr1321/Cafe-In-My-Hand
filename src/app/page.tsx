import Link from 'next/link';
import SearchBar from './shared/components/SearchBar';

export default function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-center gap-[8px]'>
      <h1 className='text-2xl font-bold'>내가 그려나가는 나만의 카페 지도</h1>
      <SearchBar />
      {/* TODO: 지역 추천(홍대, 연남 등 지역이 번갈아가며 노출됨. 무신사 키워드 랭킹처럼! 그래서 그거 누르면 지도가 그쪽으로 이동하는 기능이 있었음 좋겠음) */}
      <div>🔥핫플 추천🔥 : 연남</div>
      <div>
        <Link href='/wishlist' className='rounded-xl border px-[10px] py-[5px]'>
          위시리스트 페이지
        </Link>
        <Link href='/visited' className='rounded-xl border px-[10px] py-[5px]'>
          방문한 카페 페이지
        </Link>
      </div>
    </main>
  );
}
