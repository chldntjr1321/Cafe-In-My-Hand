import Link from 'next/link';

export default function WishlistPage() {
  return (
    <div>
      이곳은 위시리스트 페이지임~
      <Link href='/' className='rounded-xl border px-[10px] py-[5px]'>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
